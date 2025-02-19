import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IProduct } from "../products/Products";
import MyButton from "../myButton/MyButton";
import { useFormik } from "formik";
import * as Yup from "yup";

const initial: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  categorie: "",
  image: "",
  rating: {
    rate: 0,
    counter: 0,
  },
};

export default function ProductPage(): JSX.Element {
  // Получаем id продукта из URL
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>(initial);

  // Функция для получения данных о продукте
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  // Настройка Formik для формы ввода количества товара
  const formik = useFormik({
    initialValues: {
      quantity: 5, // Начальное количество
    },
    validationSchema: Yup.object({
      quantity: Yup.number()
        .min(5, "The number cannot be less than 1")
        .max(20, "The quantity cannot exceed 20")
        .required("Quantity is required")
        .integer("Must be an integer number.")
        .positive("The quantity must be positive"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values.quantity);
      resetForm();
    },
  });

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img style={{ width: "200px" }} src={product.image} alt={product.title} />

      {/* Форма для ввода количества товара */}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="quantity">Product Quantity:</label>
          <input
            onChange={formik.handleChange}
            type="number"
            id="quantity"
            name="quantity"
            value={formik.values.quantity}
          />
          {formik.touched.quantity && formik.errors.quantity ? (
            <div style={{ color: "red" }}>{formik.errors.quantity}</div>
          ) : null}
        </div>
        <MyButton text="Add to Cart" />
   </form>
   
      <Link to={"/Lesson14"}>
        <MyButton variant="danger" text="back to products" />
      </Link>
    </div>
  );
}

import StoreCard from "../storeCard/StoreCard";
import styles from "./Store.module.css";
import * as Yup from "yup";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import MyButton from "../myButton/MyButton";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  stock: number;
  limit: number;
}
const schema = Yup.object({
  limit: Yup.number()
    .typeError("введите число")
    .max(30, "Лимит должен быть меньше 30")
    .required("Поле обязательно для заполнения"),
});

export default function Store(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(0);

  async function getProducts(): Promise<void> {
    setLoader(true);
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
    setLoader(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const formik = useFormik({
    initialValues: {
      limit: 1,
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${values.limit}`
      );
      const data = await res.json();
      setProducts(data.products);
      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input
          onChange={formik.handleChange}
          name="limit"
          type="text"
          placeholder="limit"
          value={formik.values.limit}
        />
        <MyButton text="sent" type="submit" />
      </form>
      <span>{formik.errors.limit}</span>
      {loader ? (
        <div className={styles.loader}>loader...🔃</div>
      ) : (
        <div className={styles.gridContainer}>
          {products.map((product) => (
            <StoreCard id={product.id}>
              <h3>{product.title}</h3>
              <h4 style={{color:"purple"}}>price: {product.price}€</h4>
              <div>
                <img src={product.thumbnail} alt="" />
              </div>

              <h5>
                description:
                {product.description.length < 30
                  ? product.description
                  : product.description.slice(0, 30) + "..."}
              </h5>
              <h4> stock: {product.stock} pieces</h4>
            </StoreCard>
          ))}
        </div>
      )}
    </div>
  );
}

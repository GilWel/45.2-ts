import * as Yup from "yup";
import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import styles from "./Lesson12.module.css";

interface IFormValues {
  firstname: string;
  lastname: string;
  email: string;
}

const schema = Yup.object().shape({
  firstname: Yup.string()
    .typeError("firstname is a string")
    .required("model is required"),
  lastname: Yup.string()
    .typeError("firstname is a string")
    .required("model is required"),
  email: Yup.string()
    .typeError("creator is a string")
    .email("incorrect email format")
    .required("model is required")
    .max(50, "less than 50 symbols, please"),
});

export default function Lesson12(): JSX.Element {
  // мы вызываем хук useFormik, передав в него объект с настройками
  //для формы и кладем результаты в переменную formik для дальнейшей работы

  // обязательные ключи для объекта с настройками:
  // initialValues - начальное значение
  // onSubmit- функция, которфя произойдет при событии submit

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    } as IFormValues,
    validationSchema: schema,
    validateOnChange: false,


    // по этому у ключа описание события, которое произойдет по нажатию кнопки в форме
    onSubmit: (values: IFormValues, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <div className={styles.formContainer}>
      <h2>Lesson12: Formik 📝</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          value={formik.values.firstname}
          onChange={formik.handleChange}
          name="firstname"
          type="text"
          placeholder="firstname"
        />
        <input
          value={formik.values.lastname}
          onChange={formik.handleChange}
          name="lastname"
          type="text"
          placeholder="lastname"
        />
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          type="email"
          placeholder="email"
        />
        <MyButton text="send" />
      </form>
      <span>{formik.errors.firstname}</span>
      <span>{formik.errors.lastname}</span>
      <span>{formik.errors.email}</span>
    </div>
  );
}

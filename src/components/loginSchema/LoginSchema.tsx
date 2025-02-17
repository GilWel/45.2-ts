import styles from './LoginSchema.module.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import MyButton from "../myButton/MyButton";
interface loginData {
  email: string;
  password: string;
}
const schema = Yup.object().shape({
  email: Yup.string()
    .email("enter the correct email address")
    .required("email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("email is required"),
});

export default function LoginSchema(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as loginData,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values, {resetForm }) => {
      console.log(values);
      resetForm()
    },
  });

  return (
    <div className={styles.container}>
      <h2>LoginSchema</h2>
      <form onSubmit={formik.handleSubmit}>
      <input
        onChange={formik.handleChange}
        type="text"
        name="email"
        placeholder="email"
        value={formik.values.email}
      />
      <input
        onChange={formik.handleChange}
        type="text"
        name="password"
        placeholder="password"
        value={formik.values.password}
      />
      <MyButton text="SENDEN" />
      </form>
      <span>{formik.errors.email}</span>
      <span>{formik.errors.password}</span>
    </div>
  );
}

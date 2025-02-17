import { useFormik } from "formik";
import { useState } from "react";
import MyButton from "../myButton/MyButton";
import styles from "./formGender.module.css";
import * as Yup from "yup";

interface IGenderData {
  name: string;
  gender: string;
  probability: number;
}
const initial: IGenderData = {
  name: "",
  gender: "",
  probability: 0,
};
const schema = Yup.object().shape({
  name: Yup
    .string()
    .typeError("incorrect name")
    .required("model is required")
    .max(30, "your name is too long")
    .min(3, "your name is too short")
    .matches(/^[a-zA-Z]+$/, "Use only alphabet letters"),
});
export default function FormGender(): JSX.Element {
  const [gender, setGender] = useState<IGenderData>(initial);

  const formik = useFormik({
    initialValues: {
      name: "",
    } as { name: string },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: { name: string }, { resetForm }) => {
      getFormGender(values.name);
      console.log(values);
      resetForm();
    },
  });
  const getFormGender = async (name: string): Promise<void> => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    setGender(data);
  };
  const handleClean = ()=>{
    setGender(initial)
  }
  return (
    <div className={styles.container}>
      <h2>Gender party: hot_pepper:</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          type="text"
          placeholder="name"
        />
        <MyButton func={handleClean} text="get gender" />
        <br />
        <span>gender: {gender.gender} </span>
        <br />
        <span>probability: {gender.probability * 100}% </span>
      </form>
      
      <span style={{color:"red"}}>{formik.errors.name}</span>
    </div>
  );
}

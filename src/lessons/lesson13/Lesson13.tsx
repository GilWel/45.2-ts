
import * as Yup from 'yup'
import { useFormik } from "formik"
import MyButton from "../../components/myButton/MyButton"
import styles from './Lesson13.module.css'


interface IFormValues{
    model:string;
    creator:string;
    email: string;
}
//*функции для валидации в Yup
// .number() - проверка на число
//.typeError() - сообщение об ошибке
// .required("model is required") - обязательное поле
//.integer() - проверка на целое число + сообщение об ошибке
//.min + .max - минимальное и максимальное значение
// .string() - проверка на строку
// .email("incorrect email format")- проверка на формат

// создали схему 

const schema = Yup.object().shape({
    model: Yup
    .number()
    .typeError("model is a number")
    .required("model is required")
    .integer("model is integer")
    .min(100, "model number is more than 100")
    .max(1500, "model number is less than 1500"),
    creator: Yup
    .string()
    .typeError("creator is a string")
    .required("model is required"),
    email: Yup
    .string()
    .typeError("email is a string")
    .email("incorrect email format")
    .required("email is required")
    .max(50, "less than 50 symbols, please")
  
})

export default function Lesson13():JSX.Element {
    
const formik = useFormik({
    initialValues:{
        model:'',
        creator:'',
        email: ''
    } as IFormValues,

    //подключаем Yup к formik

    validationSchema:schema,
    validateOnChange: false,
    onSubmit:(values, {resetForm}) =>{
        console.log(values)
        resetForm()
    }
})

  return (
    <div className={styles.formContainer}>
      <h2>Lesson13: YUP validation 🔐 </h2>
      <form onSubmit={formik.handleSubmit}>
        <input onChange={formik.handleChange} name="model" type="text" placeholder="model" value={formik.values.model}/>
        <input onChange={formik.handleChange} name="creator" type="text" placeholder="creator"value={formik.values.creator}/>
        <input onChange={formik.handleChange} name="email" type="text" placeholder="email"value={formik.values.email}/>
        <MyButton text="SENDEN" />
      </form>
      <span>{formik.errors.model}</span>
      <span>{formik.errors.creator}</span>
      <span>{formik.errors.email}</span>      
    </div>
  )
}
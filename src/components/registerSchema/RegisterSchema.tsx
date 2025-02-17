import styles from './RegisterSchema.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import MyButton from '../myButton/MyButton';

interface registerData {
    username: string,
    email: string,
    password: string,
    confirmPassword: string;  
}

const schema = Yup.object().shape({
    username:Yup
    .string()
    .typeError('username is a string')
    .min (3,'your name is too short')
    .max(20,'your name is too long')
    .required('username is required')
    .matches(/^[a-zA-Z0-9_]+$/),
    email:Yup
    .string()
    .typeError("email is a string")
    .email("incorrect email format")
    .required("email is required"),
    password:Yup 
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(32, 'Password must be at most 32 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
    .required('Password is required'),
    confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required')

})

export default function RegisterSchema():JSX.Element {

    const formik = useFormik ({
        initialValues:{
            username:'',
            email: '',
            password: '',
            confirmPassword: ''  
        } as registerData,
        validationSchema:schema,
        validateOnChange:false,
        onSubmit:(values, {resetForm}) =>{
            console.log(values)
            resetForm();
        }
    })
  return (
    <div className={styles.container}>
      <h2>RegisterSchema</h2>
      <form onSubmit={formik.handleSubmit}>
        <input onChange={formik.handleChange} type="text" name='username'placeholder="username" value={formik.values.username} />
        <input onChange={formik.handleChange} type="text" name='email'placeholder="email" value={formik.values.email} />
        <input onChange={formik.handleChange} type="text" name='password'placeholder="password" value={formik.values.password} />
        <input onChange={formik.handleChange} type="text" name='confirmPassword'placeholder="confirmPassword" value={formik.values.confirmPassword} />
        <MyButton text="SENDEN" />
      </form>
      <span>{formik.errors.username}</span>
      <span>{formik.errors.email}</span>
      <span>{formik.errors.password}</span>
      <span>{formik.errors.confirmPassword}</span>
    </div>
  )
}



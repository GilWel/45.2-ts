
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import './LoginForm.css'

export default function LoginForm(){


    return(
       <div>
        <form className="login-form" > 
      <MyInput name="login" type="text" placeholder="Введите логин" label="Логин" />
      <MyInput name="email" type="email" placeholder="Введите email" label="Email" />
      <MyInput name="password" type="password" placeholder="Введите пароль" label="Пароль" />

      <MyButton type="submit" text="Войти" func={function (): void {
            throw new Error("Function not implemented.");
          } } />

</form>
       </div>
    )

}
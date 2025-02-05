import MyButton from "../../components/myButton/MyButton";


function Lesson02(){

    const element = <h4>Это элемент JSX из переменной greeting</h4>
    const text = 'Это строка пришла из переменной text...' 
    const react = {
        developer: 'Facebook',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
  };
  
  function showDeveloper(obj: { developer:string; }){
    if (obj.developer){
        return 'Developer: '+ obj.developer
    }else
    return "Передайте валидный объект"
    
  }
    const isLoggedIn = true

    return(
         <div>
        <h2>JSX components </h2>
        {element}
        <p>{text}</p>
        <p>В JSX мы можем пользоваться динамическими данными, которые приходят из тела react компонента или других файлов</p>
        <p>Это вычисление случилось в JSX:{20 * 3} !!!</p>
        {isLoggedIn? (<img width = {'100px'} src={react.logo} alt="" />) : ""}    
        {/* <p>React developer:{react.developer}</p> */}
        <p>{showDeveloper(react)}</p>
      <h4>Пример тернарного оператора в React</h4>
      <p>Пользователь <b>{isLoggedIn ? "в данный момент": "не"}</b>авторизирован</p>
     <p>Пример переиспользования компонентов:</p>
      <MyButton />
      
        
    </div>
   );
}
export default Lesson02;
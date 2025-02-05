import "./Lesson04.css"
import { useState } from "react";

function Lesson04(){

// let count = 1;
// const handelPlus =()=>{
//     count ++
//     console.log(count)
// }
const [count, setCount] = useState<number>(1)

const handlePlus =():void=>{
    setCount(prev => prev + 1)

 }

const handleMinus = ():void=>{
      setCount(prev => prev - 1)
    }
       // реализуем переключатель для того чтобы прятать и показывать  

       const [isVisible, setIsVisible]=useState<boolean>(false)
       const handleSwitcher = ()=>{
        setIsVisible (prev => !prev)
        console.log(isVisible)
       }

       const [color, setColor] = useState("black");
       const handleColor = (element: string) => {
        setColor(element);
       }
  

    return(
        <div>
            <h2>UseState() hook🪝</h2>
            <p>Чтобы при изменении переменной, как в примере ниже мы видели результат и 
                компонент обновился - не достаточно обычной  переменной  😒  </p>
               
                <p>Нужно использовать специальную переменную  состояния из встроенной 
                    в React функции UseState()</p>

                    <div>
                        <button onClick={handleSwitcher}>✨{!isVisible ? 'show' : 'hide'} counter ✨</button>
                    </div>
                    {isVisible && (
                        <div className="counter" style={{backgroundColor: color}} >
            <button onClick={handleMinus}>-</button>
            <span>{count}</span>
            <button onClick={handlePlus}>+</button>
            </div>
       ) }
       <div>
       <button onClick={()=> handleColor("green")}>green</button>
       <button onClick={()=> handleColor("blue")}>blue</button>
       <button onClick={()=> handleColor("red")}>red</button>
       </div>
       

        </div>
                   
        
    )
}
export default Lesson04;
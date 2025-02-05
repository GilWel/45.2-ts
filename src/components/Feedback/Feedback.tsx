import { useState } from "react"
import "./Feedback.css"

export default function Feedback (){
    const [count, setCount] = useState(1);

    const handelLike = () =>{
        setCount(prev => prev + 1);
    }
    const handelDislike = ()=>{
        setCount(prev => prev - 1);
    }
    const ClearValue = ()=> {
        setCount(0);
    }


    return(
        <div>
            <img src="https://img.freepik.com/free-photo/painting-lake-with-sunset-trees-background_1340-22924.jpg?semt=ais_hybrid" alt="Картина" />
            <div>
            <button onClick={handelLike}> Like </button>
            <span>{count}</span>
            <button onClick={handelDislike}> Dislike </button>
            
            <button onClick={ClearValue}> Clear </button>

            </div>

        </div>
    )
}
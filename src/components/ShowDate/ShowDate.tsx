import { useEffect, useState } from "react"
import "./ShowDate.css"
import MyButton from "../myButton/MyButton";


export default function ShowDate() {
    const [toggle, setToggle] = useState<boolean>(false);
    const [foximg, setFoximg] = useState<string>('');

    const handleToggle = (): void => {
        setToggle(prev => !prev);
      };
    
useEffect(()=> {
    fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data)=>{
        setFoximg(data.image)
    })
}, [])


  return (
    <div>
    <div className="fox-wrapper">
        <img src={foximg} alt="foximg" /> 
    </div>
       
<div>
    <MyButton text={`${toggle ? 'hide' : 'show'} foxPicture`} func={handleToggle} />
     {toggle && <p className="FoxText"> Обыкнове́нная лиси́ца или ры́жая лиси́ца (лат. Vulpes vulpes;
         обиходное русское название — лиса́) — хищное млекопитающее
         семейства псовых, наиболее распространённый и самый крупный 
         вид рода лисиц. Длина тела 60—90 см, хвоста — 40—60 см, масса — 6—10 кг.</p>} 
</div>
    </div>
  )
}



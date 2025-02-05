

import {fellowship} from './fellowship'
import './Lesson05.css'

function Lesson05(){

    

    
    console.log(fellowship)
    return(
        <div>
           <h2>React map() components 🧝🧝🧝</h2>
           {fellowship.map((hero) => (
            <div className='heroCard'key={hero.id}>
                <p>Hero: {hero.name}</p>
                <img src={hero.image} alt="Bild" style={{width: "300px", height:"300px" , objectFit: "cover"}} />
                <p>{hero.age} years old</p>
                 {hero.weapons[0] ? (
                <p> ⚔️ {hero.weapons.map(el =>" | " + el)} </p>

                ) : <p>No weapons</p>}
                <p>{hero.isDark ? 'Vilian🔥' : 'Hero ✨'}</p>
            </div>              
           ))}
        </div>
    );
}
export default Lesson05
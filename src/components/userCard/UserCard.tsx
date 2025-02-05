//на место props придет объект с переданными в родителе данными по соотв-щим ключам

interface IUserCardProps {
    name:string
    age:number
    lastname:string
    
}

import MyButton from "../myButton/MyButton";

function UserCard({name, age, lastname}:IUserCardProps) {

// const name = props.name
// const age = props.age

    const handleClick = () => {
        alert(`Hello ${name}`)
    }
        return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Lastname: {lastname}</p>
<MyButton func = {handleClick} 
text = {`Choose ${name} `}/>
        </div>
    )
}
export default UserCard;
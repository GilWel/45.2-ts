import "./ProfilCard.css"
interface IProfileCard{
    firstName:string,
    lastName:string,
    job:string,
    hobby:string,
    picture:string,
    imageStyle:React.CSSProperties     
}

// import imageMyFoto from "../../assets/Foto.jpg"
export default function ProfileCard ({firstName,lastName,job,hobby, picture,imageStyle }:IProfileCard):JSX.Element{
    return (
        <div>
           <img src={picture} alt="Аватар" style={imageStyle}  />
           <p>Name: {firstName}</p>
           <p>LastName: {lastName}</p>
           <p>Job: {job}</p>
           <p>Hobby: {hobby}</p>
           
        </div>
    )
}
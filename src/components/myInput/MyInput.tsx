interface IMyInput{
    name:string,
    type:string,
    placeholder:string,
    label:string
}

export default function MyInput({name,type, placeholder,label}:IMyInput){
    return(
        <div>
             <label htmlFor={name}>{label}</label>
             <input name={name} type={type} placeholder={placeholder} />
           
        </div>
    )
}
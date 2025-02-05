
import ProfileCard from '../../ProfileCard/ProfileCard'
import './Homework02.css'


export default function Homework02 (){
    return(
        <div>
        <ProfileCard firstName={"Alla"} lastName={"Pugachyva"} job={"singer"} hobby={"Yoga"} picture={"https://www.grazia.ru/upload/img_cache/557/557623c426700b42e3fac986ff39ebbe_cropped_600x817.jpeg"}
         imageStyle = {{width: "500px", height:"500px" , objectFit: "cover"}}/>
        <ProfileCard firstName={"Philipp"} lastName={"Kirkorov"} job={"singer"} hobby={"Sport"} picture={"https://artist-production.de/wp-content/uploads/2021/05/philipp-kirkorov-1.jpg"}
         imageStyle = {{width: "500px", height:"500px" , objectFit: "cover"}}/>
        <ProfileCard firstName={"Valeri"} lastName={"Leontiev"} job={"singer"} hobby={"dance"} picture={"https://i.obozrevatel.com/gallery/2019/3/19/screenshot82.png"}
         imageStyle = {{width: "500px", height:"500px" , objectFit: "cover"}}/>
        </div>
    )
}
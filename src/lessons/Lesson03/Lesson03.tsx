
import UserCard from "../../components/userCard/UserCard";

function Lesson03(){
    return (
        <div>
<h2>React Props 👩‍👦👌🎉 </h2>
<p>Props используются для передачи данных от родительских компонентов 
дочерним компонентам. Это один из основных механизмов передачи данных в React</p>


  <UserCard  name = {"Bilgo"} age = {45} lastname = "Baggins"/>
  <UserCard  name = {"Gendalf"} age = {2000} lastname = "White"/>
  <UserCard  name = {"Gimli"} age = {90} lastname = "Becker"/>

        </div>
    );
}
export default Lesson03;
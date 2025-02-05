import MyButton from "../../components/myButton/MyButton";

export default function Lesson07(){
// * interface - типизация объекта

interface ISuperHero {
    id: number;
    name: string;
    nickname: string;
    superpowers: string[];
    age?:number;
};

// пример расширения типа через ключевае слова extends

interface ISpaceHero extends ISuperHero {
    homePlanet: |'Marc'|'Saturn'|'Crypton' 
}
 // пример объекта с типом ISuperHero

const hero1: ISuperHero = {
    id: 1,
    name: 'Bruce Wayne',
    nickname:'Batman',
    superpowers:[]    
};

// у этого примера расширенный тип ISpaceHero
const hero2: ISpaceHero = {
    id: 2,
    name: 'Clark Kent',
    nickname:'Superman',
    superpowers:['super fly','super vision'],  
    homePlanet: 'Crypton' 
};

// через quick fix > add missing properties можно быстро
//  добавить недостающие для соблюдения типизации свойства в объект 


const hero3:ISuperHero={
    id: 0,
    name: "",
    nickname: "",
    superpowers: []
};

// пример объединения типов

interface IDarkMagic {
    isDark: true
}
interface ILightMagic {
    isLight: true;
}
interface IMagic extends IDarkMagic, ILightMagic{}

const magic: IMagic = {
    isDark: true,
    isLight: true
}

const magic1: IDarkMagic & ILightMagic = {
    isDark: true,
    isLight: true
}

// type -типизация объектов

type User = {
    id: number
    isAdmit: boolean
    name: string
}

type UserProfile = User & {
    info:string
}



const jane: User = {
    id: 12,
    isAdmit: false,
    name: "Jane Osten"
}

const neo: UserProfile = {
    id: 10,
    isAdmit: false,
    name: 'Neo',
    info:'Backend Develop in big tech company'

}
// ! Типизация массива объектов

// дженерики
// инструмент с помощью которого мы создаем обобщенные типы
// работают при создании и использований функции

// function makeArray (first: number, second:number):number[]{
//     return[first, second]
// }
function makeArray <T> (first:T, second:T):T[]{
        return[first, second]
}

    makeArray<number>(12,42);
    makeArray<string>('apple','flower');
    makeArray <boolean>(true,false);

// ! Типизация массива объектов
//при типизации массива из объектов мы сначала типизируем один экземпляр (как в случае с ISuperHero)
// потом описываем типизацию массива через обращение к этому экземпляру и использовании квадратных скобок (ISuperHero[])

const heroes:ISuperHero[] = [hero1,hero2, hero3];







    return(
        <div>
            <h2>Typescript pt2🤨</h2>
            <p>Самое интересное  на этом уроке происходит
             в теле функции компонента и в командной строке:</p>
             <MyButton func={() => console.log('click!')} />
        </div>
    )
}
//
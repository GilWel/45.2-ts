
export default function Lesson06() {
// * typescript

// *  string
let userName: string = 'Irina';
userName='Gilian'

// * number 
let number: number = 42
number = 4.33

//* boolean
let isAdmin: boolean = true;
isAdmin = false;

// * null, undefined
let nothing: undefined = undefined
let empty:null = null

//* union type (объединение)
let value:number | string = 100
value = 1000
value = "my favorite number" + value

// * типизация массива / array
const colors:string[] = ['red','green','blue']
colors.push('magenta')


const numbers:number[] = [12,58,69,87]
numbers.pop()
 
// tuple (кортеж)

const person:readonly [string, number] = ['John', 35]

function sum (a:number, b:number):number{
    return a + b;

}
const result:number = sum(42,100)
console.log(result)


const showMessage = (message:string|number):void=> {
    console.log('result:', message)
}
const noReturn = showMessage(result)
console.log(noReturn)

// any - ленивый тип данных, для тех кто не хочет прописывать типы данных
// let someVar: any = "Hello";




  return (
    <div>
      <h2>Typescript 🤨 </h2>
      <p>Самое интересное  на этом уроке происходит в теле функции компонента и в командной строке:</p>
    </div>
  )
}

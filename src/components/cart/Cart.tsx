import styles from './Cart.module.css'
import { ICartItem, useCart } from "../../context/CartContext"
import MyButton from "../myButton/MyButton";

// eslint-disable-next-line react-refresh/only-export-components
export const getTotalPrice =(items:ICartItem[])=>{
      return items.reduce((total, item) =>total + item.price * item.quantity, 0 ).toFixed(2)
}

export default function Cart():JSX.Element {
  // вызываем функцию useCart и путем деструктаризации получаем данные из контекста корзины
    const {cart,clearCart,removeFromCart} = useCart();

 
  


  return (
    <div className={styles.cartContainer}>
      <h2>Cart 🛒</h2>
      <div className={styles.cartList}>
        {cart.map(el =>(
            <div key={el.id}>
               <button onClick={()=>removeFromCart(el.id)}>delete</button>
            <span>{el.title} </span>
            <span style={{fontWeight: 'bold'}}>quantity:{el.quantity}</span>
           
            </div>
        ))}
      </div>
      <div>
        <h3>Total price: {getTotalPrice(cart)} €</h3>
      </div>
      <div>
        <MyButton func={clearCart} variant="danger" text={'clear Cart'}/>
      </div>
    </div>
  )
}
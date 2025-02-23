import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css'
import MyButton from '../myButton/MyButton';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../favoritesContext/FavoritesContext';

interface IProductCardProps {
  title: string;
  image:string;
  id:number;
  price:number;
}

export default function ProductCard({title,image,id,price}: IProductCardProps): JSX.Element {

  const {addToCart} = useCart();  
  const {isFavorite, addToFavorites, removeFromFavorites} = useFavorites();
  
    const toggleFavorite = ()=>{
      if (isFavorite(id)) {
        removeFromFavorites(id);
        } else{
        addToFavorites(id);
      }
    }

  return (
    <div className={styles.productCard}>
      <h4>{title.length < 30 ? title:title.slice(0,30)+'...'}</h4>
      <p>Price: {price}€</p>
      <div>
        <img src={image} alt="bild" />
      </div>
     <section>
      <Link to={String (id)}> <MyButton text='to product'/> </Link>
      <MyButton func={() => addToCart({id, title,price,quantity:1})} text='add to cart' variant='danger'/>
      <button onClick={toggleFavorite}>
      {isFavorite(id) ?'❤️' : '🤍'} </button>
      </section>
    </div>
  )
}
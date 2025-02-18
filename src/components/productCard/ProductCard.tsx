import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css'
import MyButton from '../myButton/MyButton';

interface IProductCardProps {
  title: string;
  image:string;
  id:number;
  price:number;
}

export default function ProductCard({title,image,id,price}: IProductCardProps): JSX.Element {
  return (
    <div className={styles.productCard}>
      <h4>{title.length < 30 ? title:title.slice(0,30)+'...'}</h4>
      <p>Price: {price}</p>
      <div>
        <img src={image} alt="bild" />
      </div>
     
      <Link to={String (id)}> <MyButton text='to product'/> </Link>
    </div>
  )
}
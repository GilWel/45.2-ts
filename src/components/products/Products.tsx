import styles from "./products.module.css";
import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import Cart from "../cart/Cart";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  categorie: string;
  image: string;
  rating: {
    rate: number;
    counter: number;
  };
}

export default function Products(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  async function getProducts(): Promise<void> {
    setLoader(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data: IProduct[] = await res.json();
    setProducts(data);
    setLoader(false);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Cart />

      <div>
        {loader ? (
          <div className={styles.loader}>loader...🔃</div>
        ) : (
          <div className={styles.gridContainer}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                id={product.id}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

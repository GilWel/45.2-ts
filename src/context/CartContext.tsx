import { Children, createContext, useContext, useState } from "react";

// типизируем элемент корзины
export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// типизируем данные для контекста
// это те данные, которые будут доступты для всех компонентов
interface ICartContextType {
  // это массив из элементов корзины
  cart: ICartItem[];

  // функция добавления в корзину элемента
  addToCart: (product: ICartItem) => void;

  // функция удаления из корзины элемента
  removeFromCart: (id: number) => void;

  // функция удаления из корзины  все элементы
  clearCart: () => void;
}
// ! 1. создаем объект контекст для дальнейшей работы с ним и даем начальное значение
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<ICartContextType | undefined>(
  undefined
);

// ! 2. создаем компонент-обертку, который будет использовать в себе CartContext и передавать в него нужные данные

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  
  // * 1 переменная состояния для значений корзины
  const [cart, setCart] = useState<ICartItem[]>([]);

  // * 2 функция добавления элементов в корзину
  const addToCart = (product: ICartItem) => {
    setCart((prev) => {
      const productExist = prev.find((item) => item.id === product.id);
      if (productExist) {
        return prev.map((item) =>
          item.id === productExist.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // * 3 функция удаления товара из корзины
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // * 4 функция очищения корзины
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ! 3. функция для получения данных из контекста

// eslint-disable-next-line react-refresh/only-export-components
export  const useCart =()=> {

// проверяем, что контекст не undefined
// пробуем зфбрать из него данные через хук useContext, который принимает в себя выбранный  объект контекст
// он отдаст данные, то все хорощо-мы вернем их, если нет - покажем ошибку

    const context = useContext(CartContext)
    if(!context){
        throw new Error ('no such context');
      }
      return context;
};

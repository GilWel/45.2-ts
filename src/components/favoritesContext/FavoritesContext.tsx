// import styles from './FavoritesContext.module.css'

import { Children, createContext, useContext, useState } from "react";

interface IFavoritesContextProps {
  favorite: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}
// создаем контекст
export const FavoritesContext = createContext<IFavoritesContextProps | undefined>(undefined);


// делаем обертку со всеми функциями
export const FavoriteProvider = ({children}: {children: React.ReactNode}) => {

  const [favorite, setFavorite] = useState<number[]>([]);


  const addToFavorites = (id: number) => {
 // создаётся новый массив, в который добавляется новый элемент с идентификатором id.
    setFavorite((prev) => [...prev, id]);
  };

  const removeFromFavorites = (id: number) => {
    setFavorite((prev) => prev.filter((itemId) => itemId !== id));
  };
// includes — это метод, который используется в JavaScript для проверки, 
// содержится ли определённый элемент в массиве, строке или другом подобном объекте.
  const isFavorite = (id: number) => favorite.includes(id);


  return (
    <FavoritesContext.Provider
      value={{ favorite, addToFavorites, removeFromFavorites, isFavorite }} >
         {children}
    </FavoritesContext.Provider>
  );
};


export const useFavorites = ():IFavoritesContextProps => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

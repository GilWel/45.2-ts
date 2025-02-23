import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/Lesson05/Lesson05";
import FetchFox from "./components/fetchFox/FetchFox";
import NoPage from "./components/noPage/NoPage";
import LoginForm from "./components/loginForm/LoginForm";
import HomePage from "./components/homePage/HomePage";
import Feedback from "./components/Feedback/Feedback";
import Lesson03 from "./lessons/Lesson03/Lesson03";
import Lesson04 from "./lessons/Lesson04/Lesson04";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson08 from "./lessons/Lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson02 from "./lessons/Lesson02/Lesson02";
import Homework02 from "./components/Homework/Homework02/Homework02";
import Homework03 from "./components/Homework/Homework03/Homework03";
import Homework04 from "./components/Homework/Homework04/Homework04";
import SpaceMission from "./spaceMission/SpaceMission";
import Counter from "./components/counter/Counter";
import ShowDate from "./components/ShowDate/ShowDate";
import Lesson11 from "./lessons/lesson11/Lesson11";
import Lesson12 from "./lessons/lesson12/Lesson12";
import FormGender from "./components/formGender/FormGender";
import Lesson13 from "./lessons/lesson13/Lesson13";
import RegisterSchema from "./components/registerSchema/RegisterSchema";
import LoginSchema from "./components/loginSchema/LoginSchema";
import Lesson14 from "./lessons/Lesson14/Lesson14";
import ProductPage from "./components/productPage/ProductPage";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import { FavoriteProvider } from "./components/favoritesContext/FavoritesContext";


function App() {
  return (
    // ! обернули все приложение в CartProvider с контекстом чтобы иметь доступ к данным корзины
    <FavoriteProvider>
    <CartProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage/>} />
          <Route path="fellowship" element={<Lesson05 />} />
          <Route path="fetch-fox" element={<FetchFox />} />
          <Route path="loginForm" element={<LoginForm/>} />
          <Route path="feedback" element={<Feedback/>} />
          <Route path="spaceMission" element={<SpaceMission/>} />
          <Route path="counter" element={<Counter/>} />
          <Route path="showDate" element={<ShowDate/>} />
          <Route path="lesson02" element={<Lesson02/>} />
          <Route path="lesson03" element={<Lesson03/>} />
          <Route path="lesson04" element={<Lesson04/>} />
          <Route path="lesson05" element={<Lesson05/>} />
          <Route path="lesson06" element={<Lesson06/>} />
          <Route path="lesson07" element={<Lesson07/>} />
          <Route path="lesson08" element={<Lesson08/>} />
          <Route path="lesson09" element={<Lesson09/>} />
          <Route path="lesson11" element={<Lesson11/>} />
          <Route path="lesson12" element={<Lesson12/>} />
          <Route path="lesson13" element={<Lesson13/>} />
          <Route path="lesson14" element={<Lesson14/>} />
          <Route path="lesson14/:id" element={<ProductPage/>} />
          <Route path="Homework02" element={<Homework02/>} />
          <Route path="Cart" element={<Cart/>} />
          <Route path="Products" element={<Products/>} />
          <Route path="Products/:id" element={<ProductPage/>} />
          <Route path="Homework03" element={<Homework03/>} />
          <Route path="Homework04" element={<Homework04/>} />
          <Route path="FormGender" element={<FormGender/>} />
          <Route path="RegisterSchema" element={<RegisterSchema/>} />
          <Route path="LoginSchema" element={<LoginSchema/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
    </CartProvider>
    </FavoriteProvider>
  );
}

export default App;

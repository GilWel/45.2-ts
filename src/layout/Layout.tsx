import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { useCart } from "../context/CartContext";
import { getTotalPrice } from "../components/cart/Cart"


export default function Layout() {
  const{cart} =useCart();
  return (
    <>
      <header className={styles.header}>
        <nav>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"/"}
        >
          home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"fellowship"}
        >
          fellowship
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"fetch-fox"}
        >
          fetch fox
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"loginForm"}
        >
          loginForm
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"products"}
        >
          products
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"Cart"}
        >
          Cart
        </NavLink>
        </nav>
        <span> total: {getTotalPrice(cart)} € </span>
        
      </header>

      <main className={styles.main}>
        <Outlet />
        
      </main>

      <footer className={styles.footer}>footer</footer>
    </>
  );
}

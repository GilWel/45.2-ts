import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";


export default function Layout() {
  return (
    <>
      <header className={styles.header}>
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
      </header>

      <main className={styles.main}>
        <Outlet />
        
      </main>

      <footer className={styles.footer}>footer</footer>
    </>
  );
}

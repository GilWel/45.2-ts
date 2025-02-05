import MyButton from "../../components/myButton/MyButton";
import styles from "./Lesson09.module.css";

export default function Lesson09() {
  console.log(styles);
  return (
    <div>
      <h2 className={styles.heading}>Lesson 09: css modules</h2>
      <p className={`${styles.desc} ${styles.textGreen}`}>
        {" "}
        CSS модули -это технология,с помощью которой мы можем изолированно
        работать со стилями
      </p>

      <MyButton variant="danger" text="danger" />
      <MyButton disabled={true} text="disabled" />
      <MyButton text="primary" />

      <p>Задачу добавления нескольких классов можно решить так:</p>
      <ul className={styles.list}>
        <li> Конкатенация</li>
        <li> Шаблонная строка</li>
        <li> Библиотека classnames</li>
      </ul>
    </div>
  );
}

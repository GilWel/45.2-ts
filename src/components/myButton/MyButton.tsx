// пример отдельного компонента кнопки
// экспорт по умолчанию написан перед объявлением функции
import styles from "./MyButton.module.css";
import cn from "classnames";
/// типизация props для кнопки

interface IMyButtonProps {
  // тип кнопки чтобы показывать разные стили
  variant?: "primary" | "danger";
  // активная кнопка или нет
  disabled?: boolean;
  // необязательные ключи
  text?: string;
  type?: "button" | "submit" | "reset";
  func?: () => void;
}

// указали значения по умолчанию для необязательных ключей
export default function MyButton({
  type = "submit",
  func = () => {},
  text = "click me",
  variant = "primary",
  disabled = false,
}: IMyButtonProps) {
  return (
    <button
      className={cn(styles.MyButton, {
        [styles.primary]: variant === "primary",
        [styles.danger]: variant === "danger",
        [styles.disabled]: disabled === true,
      })}
      type={type}
      onClick={func}
    >
      {text}
    </button>
  );
}

import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.lessonContainer}>
      <h2 className={styles.home}>HomePage</h2>
      <h2></h2>

      <Link className={styles.linkActive} to={"Lesson02"}>
        lesson02
      </Link>
      <Link className={styles.linkActive} to={"Feedback"}>
        Feedback
      </Link>
      <Link className={styles.linkActive} to={"Lesson03"}>
        Lesson03
      </Link>
      <Link className={styles.linkActive} to={"LoginForm"}>
        LoginForm
      </Link>
      <Link className={styles.linkActive} to={"Lesson04"}>
        Lesson04
      </Link>
      <Link className={styles.linkActive} to={"SpaceMission"}>
        SpaceMission
      </Link>
      <Link className={styles.linkActive} to={"Lesson05"}>
        lesson05
      </Link>
      <Link className={styles.linkActive} to={"ProfileCard"}>
        ProfileCard
      </Link>
      <Link className={styles.linkActive} to={"Lesson06"}>
        Lesson06
      </Link>
      <Link className={styles.linkActive} to={"ShowDate"}>
        ShowDate
      </Link>
      <Link className={styles.linkActive} to={"Lesson07"}>
        lesson07
      </Link>
      <Link className={styles.linkActive} to={"Counter"}>
        Counter
      </Link>

      <Link className={styles.linkActive} to={"Lesson08"}>
        Lesson08
      </Link>
      <Link className={styles.linkActive} to={"Homework02"}>
        Homework02
      </Link>
      <Link className={styles.linkActive} to={"Lesson09"}>
        lesson09
      </Link>
      <Link className={styles.linkActive} to={"Homework03"}>
        Homework03
      </Link>
      <Link className={styles.linkActive} to={"Lesson11"}>
        lesson11
      </Link>
      <Link className={styles.linkActive} to={"Lesson04"}>
        Lesson04
      </Link>
      <Link className={styles.linkActive} to={"Lesson12"}>
      Lesson12
      </Link>
      <Link className={styles.linkActive} to={"FormGender"}>
      FormGender
      </Link>
      <Link className={styles.linkActive} to={"Lesson13"}>
      Lesson13
      </Link>
      <Link className={styles.linkActive} to={"RegisterSchema"}>
      RegisterSchema
      </Link>
      <Link className={styles.linkActive} to={"LoginSchema"}>
      LoginSchema
      </Link>
    </div>
  );
}

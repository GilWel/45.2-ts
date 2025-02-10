import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import MyButton from "../../components/myButton/MyButton";
import styles from './Lesson11.module.css'

interface IPhotoFact {
  fact: string;
  url: string;
}

export default function Lesson11(): JSX.Element {
  // переменные состояния
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [photoFact, setPhotoFact] = useState<IPhotoFact[]>([]);

  const getFactAndPic = async (): Promise<void> => {
    setIsLoading(true);

    const resFact = await fetch("https://catfact.ninja/fact");
    const dataFact = await resFact.json();
    const resPhoto = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
    );
    const dataPhoto = await resPhoto.json();
    setPhotoFact((prev) => [
      ...prev,
      { fact: dataFact.fact, url: dataPhoto[0].url },
    ]);
    setIsLoading(false);
  };
  useEffect(() => {
    getFactAndPic();
  }, []);
  const handleDelete = (): void => {
    setPhotoFact([]);
  };
  console.log(photoFact);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.factContainer}>
          {photoFact.map((card) => (
            <>
              <p>🐾{card.fact}🐾</p>
              <img src={card.url} alt="" height={300} />
            </>
          ))}
        </div>
      )}
      <div className={styles.buttons}>
        <MyButton func={getFactAndPic} text="get more info" />
        <MyButton func={handleDelete} text="delete all data" />
      </div>
    </div>
  );
}

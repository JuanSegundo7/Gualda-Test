import { useSelector } from "react-redux";
import { Films, States } from "../../models/types";
import appStyles from "../../App.module.css";
import FilmCard from "../../components/films";
import Spinner from "../../components/spinner";
import { useEffect } from "react";
import { getFilms } from "../../redux/actions";
import styles from "./home.module.css";
import { useAppDispatch } from "../../redux/hook";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  const films = useSelector(({ Films }: States) => Films);

  return (
    <section className={appStyles.PageStyle}>
      <h1 id={styles.title}>STAR WARS </h1>
      <div className={appStyles.PageContainer}>
        {!films.length ? (
          <Spinner />
        ) : (
          films.map((films: Films) => (
            <FilmCard
              key={films.episode_id}
              title={films.title}
              episode_id={films.episode_id}
              director={films.director}
              characters={films.characters}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Home;

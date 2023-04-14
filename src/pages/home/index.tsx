import { useSelector } from "react-redux";
import { Films, States } from "../../models/types";
import styles from "../../App.module.css";
import FilmCard from "../../components/films";
import Spinner from "../../components/spinner";

const Home = () => {
  window.scrollTo(0, 0);

  const films = useSelector(({ Films }: States) => Films);

  return (
    <section className={styles.PageStyle}>
      <div className={styles.PageContainer}>
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

import React, { useEffect } from "react";
import { useAppDispatch } from "../../redux/hook";
import { useSelector } from "react-redux";
import { getFilms } from "../../redux/actions";
import { Films, States } from "../../../models/types";
import styles from "./home.module.css";
import FilmCard from "../films";

const Home = () => {
  const dispatch = useAppDispatch();
  const films = useSelector(({ Films }: States) => Films);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  return (
    <section id={styles.Home}>
      <div className={styles.filmsFlex}>
        {films.length > 0 &&
          films.map((films: Films) => (
            <FilmCard
              title={films.title}
              episode_id={films.episode_id}
              director={films.director}
              characters={films.characters}
            />
          ))}
      </div>
    </section>
  );
};

export default Home;

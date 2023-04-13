import React, { useEffect } from "react";
import { useAppDispatch } from "../../redux/hook";
import { useSelector } from "react-redux";
import { getFilms } from "../../redux/actions";
import { Films, States } from "../../../models/types";
import FilmCard from "../films";

const Home = () => {
  const dispatch = useAppDispatch();
  const films = useSelector(({ Films }: States) => Films);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  return (
    <section>
      <h1>Home</h1>
      {films.length > 0 &&
        films.map((films: Films) => (
          <FilmCard
            title={films.title}
            episode_id={films.episode_id}
            director={films.director}
            characters={films.characters}
          />
        ))}
    </section>
  );
};

export default Home;

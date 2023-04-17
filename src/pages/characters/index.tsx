import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { useSelector } from "react-redux";
import { Characters, Films, States } from "../../models/types";
import CharacterCard from "../../components/characters";
import styles from "../../App.module.css";
import Spinner from "../../components/spinner";
import { cleanCharacters, getFilms, loadCharacters } from "../../redux/actions";
import Filter from "../../components/filter";

const CharactersPage = () => {
  const [loaded, setLoaded] = useState(false);

  window.onload = () => {
    setLoaded(true);
  };

  window.scrollTo(0, 0);

  const characters = useSelector(({ Characters }: States) => Characters);
  const charactersError = useSelector(
    ({ CharactersError }: States) => CharactersError
  );
  const charactersCopy = useSelector(
    ({ CharactersCopy }: States) => CharactersCopy
  );
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const films = useSelector(({ Films }: States) => Films);

  const charactersUrl =
    films.find((film: Films) => (id ? film.episode_id === parseInt(id) : false))
      ?.characters ?? [];

  useEffect(() => {
    if (charactersUrl.length > 0) dispatch(loadCharacters(charactersUrl));

    if (loaded) {
      dispatch(getFilms());
      dispatch(loadCharacters(charactersUrl));
    }

    return () => {
      dispatch(cleanCharacters());
    };
  }, [dispatch, loaded]);

  const currentCharacters =
    charactersCopy.length > 0 ? charactersCopy : characters;

  return (
    <section className={styles.PageStyle}>
      {characters.length ? <Filter /> : null}
      <div className={styles.PageContainer}>
        {characters.length === 0 ? (
          <Spinner />
        ) : charactersError ? (
          <h1 id={styles.Error}>{charactersError}</h1>
        ) : (
          currentCharacters.map((character: Characters, i) => (
            <CharacterCard
              key={i}
              name={character.name}
              gender={character.gender}
              eye_color={character.eye_color}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default CharactersPage;

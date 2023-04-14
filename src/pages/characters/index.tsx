import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Characters, Films, States } from "../../models/types";
import CharacterCard from "../../components/characters";
import styles from "../../App.module.css";
import Spinner from "../../components/spinner";

const CharactersPage = () => {
  window.scrollTo(0, 0);

  const { id } = useParams();
  const films = useSelector(({ Films }: States) => Films);

  const characters =
    films.find((film: Films) => (id ? film.episode_id === parseInt(id) : false))
      ?.characters ?? [];

  return (
    <section className={styles.PageStyle}>
      <div className={styles.PageContainer}>
        {!characters.length ? (
          <Spinner />
        ) : (
          characters.map((character: Characters, i) => (
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

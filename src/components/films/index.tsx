import React from "react";
import { Films } from "../../models/types";
import styles from "./filmCard.module.css";
import { Link } from "react-router-dom";

function FilmCard({ title, episode_id, director }: Films) {
  return (
    <div id={styles.FilmCard}>
      <h1>{title}</h1>
      <p>Episode number {episode_id}</p>
      <p>Director: {director}</p>
      <Link to={`/film/${episode_id}/characters`}>Characters</Link>
    </div>
  );
}

export default FilmCard;

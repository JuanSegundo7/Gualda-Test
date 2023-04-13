import React from "react";
import { Films } from "../../../models/types";
import styles from "./filmCard.module.css";

function FilmCard({ title, episode_id, director }: Films) {
  return (
    <div id={styles.FilmCard}>
      <h1>{title}</h1>
      <p>Episode number {episode_id}</p>
      <p>Director: {director}</p>
      <p>Characters</p>
    </div>
  );
}

export default FilmCard;

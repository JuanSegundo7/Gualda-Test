import React from "react";
import { Characters } from "../../models/types";
import styles from "./characterCard.module.css";

const CharacterCard = ({ name, eye_color, gender }: Characters) => {
  return (
    <div id={styles.CharacterCard}>
      <h1>{name}</h1>
      <p>{gender}</p>
      <p>Eye color: {eye_color}</p>
    </div>
  );
};

export default CharacterCard;

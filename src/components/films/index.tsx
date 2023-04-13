import React from "react";
import { Films } from "../../../models/types";

function FilmCard({ title, episode_id }: Films) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Episode number: {episode_id}</p>
      <p>Characters</p>
    </div>
  );
}

export default FilmCard;

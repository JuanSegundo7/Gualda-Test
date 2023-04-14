import axios from "axios";
import { Films, Characters } from "../models/types";

export const GET_PLANETS = "GET_PLANETS";

export const getFilms = () => async (dispatch: Function) => {
  try {
    const { data } = await axios.get(`https://swapi.dev/api/films`);

    const { results } = data;

    const updatedResults = await Promise.all(
      results.map(async (film: Films) => {
        const charactersArray: Characters[] = [];

        await Promise.all(
          film.characters.map(async (characterString: any) => {
            const { data } = await axios.get(characterString);
            charactersArray.push(data);
          })
        );

        return {
          ...film,
          characters: charactersArray,
        };
      })
    );

    dispatch({ type: GET_PLANETS, payload: updatedResults });
  } catch (e) {
    console.log(e);
  }
};

import axios from "axios";
import { Characters } from "../models/types";

export const GET_PLANETS = "GET_PLANETS";
export const LOAD_CHARACTERS = "LOAD_CHARACTERS";
export const CLEAN_CHARACTERS = "CLEAN_CHARACTERS";
export const FILTER = "FILTER";

export const getFilms = () => async (dispatch: Function) => {
  try {
    const { data } = await axios.get(`https://swapi.dev/api/films`);

    const { results } = data;

    dispatch({ type: GET_PLANETS, payload: results });
  } catch (e) {
    console.log(e);
  }
};

export const loadCharacters =
  (characters: any) => async (dispatch: Function) => {
    try {
      const dataArray = [] as Characters[];

      for (const url of characters) {
        const { data } = await axios.get(url);
        dataArray.push(data);
      }

      dispatch({ type: LOAD_CHARACTERS, payload: dataArray });
    } catch (e) {
      console.log(e);
    }
  };

export const cleanCharacters =
  (reset?: boolean) => async (dispatch: Function) => {
    try {
      dispatch({ type: CLEAN_CHARACTERS, payload: reset });
    } catch (e) {
      console.log(e);
    }
  };

export const filter = (obj: Object) => async (dispatch: Function) => {
  try {
    dispatch({ type: FILTER, payload: obj });
  } catch (e) {
    console.log(e);
  }
};

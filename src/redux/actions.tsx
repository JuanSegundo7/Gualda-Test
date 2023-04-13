import axios from "axios";

export const GET_PLANETS = "GET_PLANETS";

export const getFilms = () => async (dispatch: Function) => {
  try {
    const { data } = await axios.get(`https://swapi.dev/api/films`);

    const { results } = data;

    console.log(results);

    dispatch({ type: GET_PLANETS, payload: results });
  } catch (e) {
    console.log(e);
  }
};

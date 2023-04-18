import {
  GET_PLANETS,
  LOAD_CHARACTERS,
  CLEAN_CHARACTERS,
  FILTER,
} from "./actions";

import { Characters } from "../models/types";

const initialState = {
  Films: [],
  Characters: [],
  CharactersCopy: [],
  CharactersError: "",
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PLANETS: {
      return {
        ...state,
        Films: action.payload,
      };
    }

    case LOAD_CHARACTERS: {
      return {
        ...state,
        Characters: action.payload,
      };
    }

    case CLEAN_CHARACTERS: {
      if (action.payload) {
        return {
          ...state,
          CharactersError: "",
          CharactersCopy: [],
        };
      }

      return {
        ...state,
        Characters: [],
        CharactersCopy: [],
      };
    }

    case FILTER: {
      const { value, name } = action.payload;
      let filteredArray;

      if (name === "Eye Color") {
        if (state.CharactersCopy.length > 0) {
          filteredArray = state.CharactersCopy.filter((character: Characters) =>
            character.eye_color.includes(value.toLowerCase())
          );

          return {
            ...state,
            CharactersCopy: filteredArray,
          };
        }

        filteredArray = state.Characters.filter((character: Characters) =>
          character.eye_color.includes(value.toLowerCase())
        );
      }

      filteredArray = state.Characters.filter((character: Characters) =>
        character.gender.includes(value.toLowerCase())
      );

      if (!filteredArray.length) {
        return {
          ...state,
          CharactersCopy: [],
          CharactersError:
            "There are not characters available with these characteristics",
        };
      }

      if (
        JSON.stringify(filteredArray) === JSON.stringify(state.CharactersCopy)
      ) {
        return state;
      }

      return {
        ...state,
        CharactersCopy: filteredArray,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

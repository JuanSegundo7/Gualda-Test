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
      if (action.payload == true) {
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

      if (state.CharactersCopy.length > 0) {
        let update = state.CharactersCopy.filter((character: Characters) =>
          name == "Eye Color"
            ? character.eye_color.includes(value.toLowerCase())
            : character.gender.includes(value.toLowerCase())
        );

        if (!update.length) {
          return {
            ...state,
            CharacterCopy: [],
            CharactersError:
              "There are not characters available with these characteristics",
          };
        }

        return {
          ...state,
          CharactersCopy: update,
        };
      }

      const newArray = state.Characters.filter((character: Characters) =>
        name == "Eye Color"
          ? character.eye_color.includes(value.toLowerCase())
          : character.gender.includes(value.toLowerCase())
      );

      if (!newArray.length) {
        return {
          ...state,
          CharacterCopy: [],
          CharactersError:
            "There are not characters available with these characteristics",
        };
      }

      return {
        ...state,
        CharactersCopy: newArray,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

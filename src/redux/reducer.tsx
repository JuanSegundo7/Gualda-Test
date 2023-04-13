import { GET_PLANETS } from "./actions";

const initialState = {
  Films: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PLANETS: {
      return {
        ...state,
        Films: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

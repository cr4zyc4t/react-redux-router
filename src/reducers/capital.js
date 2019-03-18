import { CAPITAL_SET_TEXT } from "../actions/capital";

const initialState = {
  text: "",
};

const users = (state = initialState, { type, payload }) => {
  switch (type) {
    case CAPITAL_SET_TEXT:
      return {
        ...state,
        text: payload.text,
        
      };
    default:
      return state;
  }
};
export default users;
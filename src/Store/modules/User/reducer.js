import { ADD_COMENT } from "./actionsType";
const inicialState = { name: "kenzie", comments: [] };

const userReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_COMENT:
      return action.updateUser;
    default:
      return state;
  }
};
export default userReducer;

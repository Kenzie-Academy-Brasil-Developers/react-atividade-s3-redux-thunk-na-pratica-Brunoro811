import { addComent } from "./actions";
// o comment é o que recebemos de fora, crio um novo comentario de thunk
export const addComentThunk = (comment) => {
  //retorna um funcao anonima
  return (dispatch, getState) => {
    //pega o state user
    const { user } = getState();
    //adiciona o comentario que entrou no parametro acima
    const updateUser = { ...user, comments: [...user.comments, comment] };
    //da o dispatch na action
    dispatch(addComent(updateUser));
  };
};

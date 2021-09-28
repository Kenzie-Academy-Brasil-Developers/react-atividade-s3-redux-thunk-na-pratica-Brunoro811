import "./styles";
import { Button, Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { addComentThunk } from "../../Store/modules/User/thunks";
import { useState } from "react";

function Comment() {
  const dispacth = useDispatch();
  const { name, comments } = useSelector((state) => state.user);
  const [newComment, setnewComment] = useState();
  return (
    <Container>
      <h1>{name}</h1>
      <div className="Comment">
        <input
          placeholder="new Comment"
          onChange={(e) => setnewComment(e.target.value)}
          type="text"
        />
        <Button onClick={() => dispacth(addComentThunk(newComment))}>
          Comment
        </Button>
      </div>
      <div className="List-Comment">
        {comments[0] ? (
          comments.map((element, indice) => <div key={indice}>{element}</div>)
        ) : (
          <div>No comments</div>
        )}
      </div>
    </Container>
  );
}
export default Comment;

import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .Comment {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 80px;
    padding: 15px;
    gap: 10px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 0px 4px 0px #000000;
    h1 {
      color: black;
    }
    input {
      padding: 5px 10px;
      border-radius: 30px;
      border: 1px solid black;
      outline: none;
    }
  }
  .List-Comment {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    div {
      font-size: 14px;
      background-color: antiquewhite;
      color: black;
      border-radius: 5px;
      padding: 10px;
    }
  }
`;
export const Button = styled.button`
  padding: 7px;
  border: none;
  border-radius: 30px;
  background-color: black;
  color: white;
`;

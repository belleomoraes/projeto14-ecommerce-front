import styled from "styled-components";

const Input = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    width: 80vw;
    height: 8vh;
    margin: 10px;
    font-size: 100%;
    padding: 5%;
  }

  input::placeholder {
    color: #000000;
  }
`;

export default Input;

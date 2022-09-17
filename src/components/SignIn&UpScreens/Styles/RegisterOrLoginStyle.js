import styled from "styled-components";

const RegisterOrSignIn = styled.div`
  
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-height:720px;
  min-width: 420px;
  background-color: #242424;
  padding:  4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
 
  h2 {
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-top: 5vh;
    font-size: 2vh;
    cursor: pointer;
  }

  h1 {
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 7vh;
    padding: 8%;
    margin-top:-90px;
  }
`;

export default RegisterOrSignIn;
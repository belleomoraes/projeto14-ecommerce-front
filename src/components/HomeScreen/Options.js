import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Options({ imageFromUser }) {
  const navigate = useNavigate();
  const { setOpenOptions } = useContext(UserContext);
  function goSignIn() {
    navigate("/sign-in");
    setOpenOptions(false)
  }

  function goSignUp() {
    navigate("/sign-up");
    setOpenOptions(false)
  }


  function goHistory() {
    navigate("/history");
    setOpenOptions(false)
  }

  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("image");
    setOpenOptions(false)
    navigate("/");
  }
  return (
    <OptionsStyle>
      {imageFromUser === null ? (
        <>
        <span onClick={goSignIn}>ENTRE EM SUA CONTA</span>
        <span onClick={goSignUp}>CADASTRE-SE</span>
      </>
      ) : (
        <>
          <span onClick={goHistory}>HISTÓRICO DE COMPRAS</span>
          <span onClick={logOut}>SAIR</span>
        </>
      )}
    </OptionsStyle>
  );
}

const OptionsStyle = styled.div`
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  top: 13vh;
  padding: 2%;
  width: 50%;
  font-size: 2.5vh;
  position: fixed;
  z-index: 1;
  

  span {
    padding: 4% 2%;
  }
`;

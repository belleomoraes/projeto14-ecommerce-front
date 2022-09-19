import Head from "../Head/Head";
import BottomButtonsStyle from "../GlobalStyle/BottomButtonsStyle";
import Products from "./Products";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import styled from "styled-components";
import Options from "./Options";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { openOptions, totalValue, setOpenOptions } = useContext(UserContext);
  const imageFromUser = localStorage.getItem("image");

  function changeScreen() {
    navigate("/cart");
    setOpenOptions(false);
  }

  return (
    <>
      <Head imageFromUser={imageFromUser} />
      {openOptions ? <Options imageFromUser={imageFromUser} /> : ""}
      <Opacity openOptions={openOptions}>
        <Products />
        <BottomButtonsStyle>
          <div>
            TOTAL DA COMPRA: <h1>R$ {totalValue.toFixed(2)}</h1>
          </div>
          <span onClick={changeScreen}>FINALIZAR</span>
        </BottomButtonsStyle>
      </Opacity>
    </>
  );
}

const Opacity = styled.div`
  opacity: ${(props) => (props.openOptions ? "0.5" : "1")};
`;

import Head from "../Head/Head";
import BottomButtonsStyle from "../GlobalStyle/BottomButtonsStyle";
import Products from "./Products";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import styled from "styled-components";
import Options from "./Options";

export default function Home() {
  const { openOptions } = useContext(UserContext);
  const imageFromUser = localStorage.getItem("image");
  return (
    <>
      <Head imageFromUser = {imageFromUser}/>
      {openOptions ? <Options imageFromUser = {imageFromUser}/> : ""}
      <Opacity openOptions={openOptions}>
        <Products />
        <BottomButtonsStyle>
          <div>
            TOTAL DA COMPRA: <h1>R$ 00,00</h1>
          </div>
          <span>FINALIZAR</span>
        </BottomButtonsStyle>
      </Opacity>
    </>
  );
}

const Opacity = styled.div`
  opacity: ${(props) => (props.openOptions ? "0.5" : "1")};
`;

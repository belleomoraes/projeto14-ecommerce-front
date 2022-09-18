import Head from "../Head/Head";
import BottomButtonsStyle from "../GlobalStyle/BottomButtonsStyle";
import Products from "./Products";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import styled from "styled-components";
import Options from "../HomeScreen/Options";
import axios from "axios";

export default function CartPage() {
  const { openOptions, totalValue,
          arrProducts
  } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const imageFromUser = localStorage.getItem("image");

  function buy() {

    const item = {
      token: token,
      itens: arrProducts,
      value: totalValue
    };
    console.log(item);
     const promise = axios.post("https://projeto14-ecommerce.herokuapp.com/cart", item);

     promise.then((res) => {
       console.log("enviei");
     });

     promise.catch((res) => {
       console.log("algo deu errado");
     });
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
          <span onClick={buy}>FINALIZAR</span>
        </BottomButtonsStyle>
      </Opacity>
    </>
  );
}
const Opacity = styled.div`
  opacity: ${(props) => (props.openOptions ? "0.5" : "1")};
`;
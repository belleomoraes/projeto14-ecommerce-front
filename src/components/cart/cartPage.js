import Head from "../Head/Head";
import BottomButtonsStyle from "../GlobalStyle/BottomButtonsStyle";
import Products from "./Products";
import WithoutProducts from "./WithoutProducts";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Options from "../HomeScreen/Options";
import axios from "axios";


export default function CartPage() {
  const navigate = useNavigate();
  const { openOptions, totalValue, setTotalValue, SetArrProducts } =
    useContext(UserContext);

  const token = localStorage.getItem("token");
  const imageFromUser = localStorage.getItem("image");
  const productsCart = JSON.parse(localStorage.getItem("productsCart"));
  console.log(productsCart)
  

  function buy() {
    const item = {
      token: token,
      itens: productsCart,
      value: totalValue,
    };

    console.log(item);
    if (token === null) {
      alert("Faça o login antes de finalizar a compra");
      navigate("/sign-in");
    }
    const promise = axios.post("https://projeto14-ecommerce.herokuapp.com/cart", item);

    promise.then((res) => {
      console.log("enviei");
      SetArrProducts([]);
      setTotalValue(0);
      localStorage.removeItem("productsCart")
      navigate("/");
    });

    promise.catch((res) => {
      console.log(res);
    });
  }

  return (
    <>
      <Head imageFromUser={imageFromUser} />
      {openOptions ? <Options imageFromUser={imageFromUser} /> : ""}
      <Opacity openOptions={openOptions}>
        {productsCart.length === 0 ? <WithoutProducts /> : <Products productsCart = {productsCart}/>}
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

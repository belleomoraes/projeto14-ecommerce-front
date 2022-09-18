import Head from "../Head/Head";
import BottomButtonsStyle from "../GlobalStyle/BottomButtonsStyle";
import Products from "./Products";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import styled from "styled-components";
import Options from "./Options";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();
  const { openOptions, totalValue } = useContext(UserContext);
  const imageFromUser = localStorage.getItem("image");
  
  function changeScreen() {
    navigate("/cart");
  }
  const listOptions = [{
    name : "brigadeiro",
    value: 3.00,
    image: "https://comidinhasdochef.com/wp-content/uploads/2019/12/Brigadeiro-Gomer.jpg",
    description: "feito com leite moça"
  },
  {
    _id: '6323749202b7bc197f9d119b',
    name: "palha italiana",
    value: 5.00,
    image: "https://receitop.com/wp-content/uploads/2021/05/palha-italiana.jpg",
    description: "feito com leite ninho"
  },
  {
    _id: '6323759402b7bc197f9d119d',
    name: "pudim",
    value: 8.00,
    image: "https://s2.glbimg.com/YTXTFuRbAtHmHJV0ddq9QJPqYt8=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/P/T/BRcriaQP6Lfn7NWtestA/pudim-de-leite-receita.jpg",
    description: "com calda de laranja"
  },
  {
    _id: '632375e902b7bc197f9d119e',
    name: "torta holandesa",
    value: 15.00,
    image: "https://p7m4z9n9.stackpathcdn.com/wp-content/uploads/2020/04/tortaholandesar.png",
    description: "com chocolate 70%",
  },
  {
    _id: '6325db5daeb3589ffea361e2',
    name: "banoffee",
    value: 10.00,
    image: "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2022/08/07/787061572-banoffee-by-chef-gabriel-pita-768x540.jpg",
    description: "raspás de chocolate e canela"
  },
  {
    _id: '6325dbe0aeb3589ffea361e3',
    name:"torta de maçã",
    description: "com canela",
    image: "https://amorpelacomida.com.br/wp-content/uploads/2021/01/Torta-de-maca-super-facil-sem-farinha-de-trigo.jpg",
    value: 10.00
  },
  {
    _id: '6325dc71aeb3589ffea361e4',
    name: "brigadeirão cremoso",
    description: "com granulado",
    image: "https://assets.unileversolutions.com/recipes-v2/215327.jpg",
    value: 6.00
  },
  {
    _id: '6325dcceaeb3589ffea361e5',
    name: "gelatina colorida",
    description: "com muito leite condensado!",
    image: "https://blog.utilplast.com.br/wp-content/uploads/2021/01/gelatina_colorida-800x692.jpg",
    value: 4.00
  },
  {
    _id: '6325dd28aeb3589ffea361e6',
    name: "quindim",
    value: 7.00,
    image: "https://receitinhas.com.br/wp-content/uploads/2016/10/iStock-1317633289.jpg",
    description: "com leite de côco"
  }
]
  
  return (
    <>
      <Head imageFromUser = {imageFromUser}/>
      {openOptions ? <Options imageFromUser = {imageFromUser}/> : ""}
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

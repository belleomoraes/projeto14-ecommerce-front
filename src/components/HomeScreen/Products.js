import styled from "styled-components";
import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";

export default function Products() {

  const { 
          setTotalValue, totalValue,          
          SetArrProducts, arrProducts
        } = useContext(UserContext);

  const token = localStorage.getItem("token");

   const listOptions = [{
     _id: '632373f202b7bc197f9d119a',
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
let value = 0;
let newArr = []
// useEffect(() => {
//   const promise = axios.get("https://projeto14-ecommerce.herokuapp.com/");
//   promise.then((res) => {
//     console.log('deucerto');
//     listOptions = res.data;
//     listOptions2.push(listOptions);
//     console.log(listOptions2[0].name);
//   });

//   promise.catch((res) => {
//     console.log("algo deu errado");
//   });
// }, []);

function ShopValue(l){
  value = value + l.value;
  newArr.push(l);
  SetArrProducts(arrProducts => [...arrProducts, newArr]);
  setTotalValue(totalValue + value);
}
  return (
    <ProductsStyle>
      <span>
        {listOptions.map((l)=> {
          return(
            <div key={l._id} onClick={()=>{ShopValue(l)}} className="foodItem">
              
              <img  src={l.image} alt={l.name}/>
              <h3>R${l.value.toFixed(2)}</h3>
              <h1>{l.name}</h1>
              <h2>{l.description}</h2>
            </div> )
        })}
      </span>
    </ProductsStyle>
  );
}

const ProductsStyle = styled.div`
  margin-top: 15vh;
  margin-bottom: 10vh;
  span {
    cursor: pointer;
    flex-wrap: wrap;
    display: flex;
    height: 100%;
    justify-content: space-around;
    width: 100%;
  }
  .foodItem{
    height:210px;
    width:210px;
    position:relative;
    margin-right: 10px;
    margin-left:10px;
    margin-bottom: 30px;
  }
  img {
    position:absolute;
    top:0px;
    height:140px;
    width:210px;
    border-radius: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    width: 50%;
    padding: 2%;
    cursor: pointer;
    position: relative;
  }

  h1 {
    position:absolute;
    bottom:40px;
    font-size: 2.5vh;
    padding: 2%;
  }

  h2 {
    font-size: 1.8vh;
    color: #606060;
    position:absolute;
    bottom:20px;
  }

  /* confirmar o bottom e o right, pq n tá responsivo */
  h3 {
    position: absolute;
    color: #ffd84d;
    background-color: #242424;
    clip-path: polygon(0 100%, 100% 0%, 100% 100%, 0% 100%);
    border-radius: 0 0 5px 0;
    position: absolute;
    bottom: 70px;
    right: 0px;
    padding: 2%;
    font-size: 1.9vh;
    width: 90px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 6vh;

  }
`;

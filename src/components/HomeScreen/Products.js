import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";

export default function Products() {
  const [listOptions, setListOptions] = useState([]);
  const { setTotalValue, totalValue, SetArrProducts, arrProducts } = useContext(UserContext);

  let value = 0;
  let newArr = [];

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/"); //n esquecer de mudar pro heroku
    promise.then((res) => {
      setListOptions(res.data);
    });

    promise.catch((res) => {
      console.log("algo deu errado");
    });
  }, []);

  function ShopValue(l) {
    value = value + l.value;
    newArr.push(l);
    SetArrProducts((arrProducts) => [...arrProducts, newArr]);
    setTotalValue(totalValue + value);
  }
  const productsString = JSON.stringify(arrProducts)
  localStorage.setItem("productsCart", productsString);
  
  
  return (
    <ProductsStyle>
      <span>
        {listOptions.length > 0 ? (listOptions.map((l) => {
          return (
            <div
              key={l._id}
              onClick={() => {
                ShopValue(l);
              }}
              className="foodItem"
            >
              <img src={l.image} alt={l.name} />
              <h3>R${l.value.toFixed(2)}</h3>
              <h1>{l.name}</h1>
              <h2>{l.description}</h2>
            </div>
          );
        })) : ""}
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
  .foodItem {
    height: 210px;
    width: 210px;
    position: relative;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 30px;
  }
  img {
    position: absolute;
    top: 0px;
    height: 140px;
    width: 210px;
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
    position: absolute;
    bottom: 40px;
    font-size: 2.5vh;
    padding: 2%;
  }

  h2 {
    font-size: 1.8vh;
    color: #606060;
    position: absolute;
    bottom: 20px;
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

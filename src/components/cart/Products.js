import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Products({productsCart}) {
  const navigate = useNavigate();
  const { setTotalValue, totalValue,
    SetArrProducts, arrProducts
  } = useContext(UserContext);

  console.log(arrProducts);
  const listOptions = [];
  listOptions.push(productsCart);

  return (
    <ProductsStyle>
      <span>
        {productsCart.map((l) => {
          return (
            <div key={l._id} className="foodItem">
              <div>
                <img src={l[0].image} alt={l.name} />
                <h1>{l[0].name}</h1></div>
              <h2>R${l[0].value.toFixed(2)}</h2>
              <h2 ><ion-icon name="close-circle-outline" /></h2>
            </div>)
        })}
      </span>
    </ProductsStyle>
  );
}

const ProductsStyle = styled.div`
  margin-top: 15vh;
  img{
    margin-left:10px;
    min-width:30px;
    width:12%;
    max-width:40px;
    height:auto;
    border-radius:2px;
  }
  div{
    width:40%;
    display:flex;
    height: 100%;
    align-items:center;
  }
  span {
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-around;
    width: 100%;
  }
  .foodItem{
    background-color: #d9d9d9;
    height:40px;
    min-width:400px;
    width:100%;
    margin-bottom:10px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:relative;
  }
  h1 {
    margin-left:10px;
    font-size: 2.5vh;
  }
  h2 {
    margin-right:10px;
    font-size: 2.5vh;
  }
  ion-icon{
    color: #ff0000;
  }

`;

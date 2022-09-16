import HeadStyle from "./HeadStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Head() {
  const navigate = useNavigate();

  function openOptions() {
    //abrir opções pra login, cadastro etc
  }

  function changeScreen() {
    navigate("/cart");
  }
  return (
    <HeadStyle>
      <div>
        <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/02/rhcp-foto-encarte.jpg" />
        <ion-icon name="chevron-down-circle-outline" onClick={openOptions}></ion-icon>
      </div>
      <h1>E-FOOD</h1>
      <ion-icon name="cart-outline" onClick={changeScreen}></ion-icon>
    </HeadStyle>
  );
}

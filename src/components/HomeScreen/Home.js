import HeadStyle from "../GlobalStyle/HeadStyle";
import BottomButtonsStyle from "../GlobalStyle/BottomButtonsStyle";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <HeadStyle>
        <div>
          <img src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/02/rhcp-foto-encarte.jpg" />
          <ion-icon name="chevron-down-circle-outline"></ion-icon>
        </div>
        <h1>E-FOOD</h1>
        <ion-icon name="cart-outline"></ion-icon>
      </HeadStyle>
      <Products />
      <BottomButtonsStyle>
        <div>
          TOTAL DA COMPRA: <h1>R$ 00,00</h1>
        </div>
        <span>FINALIZAR</span>
      </BottomButtonsStyle>
    </>
  );
}

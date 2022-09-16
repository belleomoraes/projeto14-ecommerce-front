import Head from "../Head/Head";
import BottomButtonsStyle from "../GlobalStyle/BottomButtonsStyle";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <Head/>

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

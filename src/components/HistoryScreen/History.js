import HeadStyle from "../GlobalStyle/HeadStyle";
import BottomButtonsStyle from "../GlobalStyle/BottomButtonsStyle";
import HistoryStyle from "./HistoryStyle";
import WithHistory from "./WithHistory";
import WithoutHistory from "./WithoutHistory";

export default function History() {
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
      <HistoryStyle>
        <WithHistory />
      </HistoryStyle>

      <BottomButtonsStyle>
        <div>
          <ion-icon name="home-outline"></ion-icon>
        </div>
        <span>
          <ion-icon name="cart-outline"></ion-icon>
        </span>
      </BottomButtonsStyle>
    </>
  );
}

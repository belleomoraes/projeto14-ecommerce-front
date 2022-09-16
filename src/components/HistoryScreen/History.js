import BottomButtonsStyle from "../GlobalStyle/BottomButtonsStyle";
import HistoryStyle from "./HistoryStyle";
import WithHistory from "./WithHistory";
import WithoutHistory from "./WithoutHistory";
import Head from "../Head/Head";
import { useState } from "react";

export default function History() {
  return (
    <>
      <Head />
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

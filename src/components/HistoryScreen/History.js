import BottomButtonsStyle from "../GlobalStyle/BottomButtonsStyle";
import HistoryStyle from "./HistoryStyle";
import WithHistory from "./WithHistory";
import WithoutHistory from "./WithoutHistory";
import Head from "../Head/Head";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import Options from "../HomeScreen/Options";
import styled from "styled-components";

export default function History() {
  const { openOptions } = useContext(UserContext);
  const imageFromUser = localStorage.getItem("image");
  const tokenFromUser = localStorage.getItem("token");
  const navigate = useNavigate();
  if (imageFromUser === null) {
    navigate("/");
  }
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${tokenFromUser}`,
      },
    };
    const promise = axios.get("https://projeto14-ecommerce.herokuapp.com/history", config);
    promise.then((res) => {
      setHistory(res.data);
    });
  }, []);

  function goHome() {
    navigate("/");
  }

  function goCart() {
    navigate("/cart");
  }
  return (
    <>
      <Head imageFromUser={imageFromUser} />
      {openOptions ? <Options imageFromUser={imageFromUser} /> : ""}
      <Opacity openOptions={openOptions}>
        <HistoryStyle>{history.length <= 0 ? <WithoutHistory /> : <WithHistory />}</HistoryStyle>

        <BottomButtonsStyle>
          <div>
            <ion-icon name="home-outline" onClick={goHome}></ion-icon>
          </div>
          <span>
            <ion-icon name="cart-outline" onClick={goCart}></ion-icon>
          </span>
        </BottomButtonsStyle>
      </Opacity>
    </>
  );
}

const Opacity = styled.div`
  opacity: ${(props) => (props.openOptions ? "0.5" : "1")};
`;

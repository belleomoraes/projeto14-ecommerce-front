import HeadStyle from "./HeadStyle";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Head({ imageFromUser }) {
  const { openOptions, setOpenOptions } = useContext(UserContext);
  const navigate = useNavigate();

  function open() {
    setOpenOptions(true);
  }

  function close() {
    setOpenOptions(false);
  }

  function changeScreen() {
    setOpenOptions(false);
    navigate("/cart");
  }
  function changeHome() {
    setOpenOptions(false);
    navigate("/");
  }
  return (
    <>
      <HeadStyle>
        <div>
          {imageFromUser === null ? (
            <ion-icon name="person-circle-outline"></ion-icon>
          ) : (
            <img src={imageFromUser} />
          )}
          {openOptions ? (
            <ion-icon name="chevron-up-circle-outline" onClick={close}></ion-icon>
          ) : (
            <ion-icon name="chevron-down-circle-outline" onClick={open}></ion-icon>
          )}
        </div>
        <h1 onClick={changeHome}>E-FOOD</h1>
        <ion-icon name="cart-outline" onClick={changeScreen}></ion-icon>
      </HeadStyle>
    </>
  );
}

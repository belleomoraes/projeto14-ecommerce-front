import styled from "styled-components";

const HeadStyle = styled.div`
background-color: #242424;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  font-weight: 400;
  padding: 2% 5%;
  min-width:290px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  height: 11%;
 

div {
  display: flex;
  justify-content: space-between;
  align-items: center;

  ion-icon {
    font-size: 4vh;
  }
}
  img {
    border-radius: 50%;
    width: 10vh;
    height: 10vh;
    margin-right: 10%;
  }

ion-icon {
  cursor: pointer;
  font-size: 4vh;
}

h1 {
  cursor: pointer;
  font-size: 4.5vh;
}
`;

export default HeadStyle;
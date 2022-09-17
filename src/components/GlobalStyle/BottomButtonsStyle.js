import styled from "styled-components";

const BottomButtonsStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  text-align: center;
  font-size: 2.4vh;
  opacity: ${(props) => (props.openOptions ? "0.7" : "1")};

  div {
    background-color: #242424;
    color: #ffffff;
    width: 50%;
    height: 6.4vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
  }

  span {
    background-color: #ffffff;
    color: #242424;
    width: 50%;
    height: 6.4vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: #ffd84d;
  }
`;

export default BottomButtonsStyle;

import styled from "styled-components";
const HistoryStyle = styled.div`
  margin-top: 15vh;
  margin-bottom: 10vh;
  opacity: ${(props) => (props.clicked ? "0.7" : "1")};

  span {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 2%;
    margin-bottom: 2%;
  }

  h1 {
    font-size: 2.2vh;
    font-weight: bold;
  }

  h3 {
    font-size: 4vh;
    padding: 30vh 8vw;
    text-align: center;
  }
`;

export default HistoryStyle;

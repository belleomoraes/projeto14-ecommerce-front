import styled from "styled-components";
export default function Products() {
  return (
    <ProductsStyle>
      <span>
        <div>
          <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/02/53537312-aprenda-como-fazer-bolo-de-banana-com-aveia-simples-fonte-catraca-livre-800x800.jpg" />
          <h3>12,90</h3>
          <h1>BOLO DE CENOURA</h1>
          <h2>DELICIOSO E MACIO</h2>
        </div>

        <div>
          <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/02/53537312-aprenda-como-fazer-bolo-de-banana-com-aveia-simples-fonte-catraca-livre-800x800.jpg" />

          <h3>12,90</h3>
          <h1>BOLO DE CENOURA</h1>
          <h2>DELICIOSO E MACIO</h2>
        </div>

        <div>
          <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/02/53537312-aprenda-como-fazer-bolo-de-banana-com-aveia-simples-fonte-catraca-livre-800x800.jpg" />
          <h3>12,90</h3>
          <h1>BOLO DE CENOURA</h1>
          <h2>DELICIOSO E MACIO</h2>
        </div>

        <div>
          <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/02/53537312-aprenda-como-fazer-bolo-de-banana-com-aveia-simples-fonte-catraca-livre-800x800.jpg" />

          <h3>12,90</h3>
          <h1>BOLO DE CENOURA</h1>
          <h2>DELICIOSO E MACIO</h2>
        </div>

        <div>
          <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/02/53537312-aprenda-como-fazer-bolo-de-banana-com-aveia-simples-fonte-catraca-livre-800x800.jpg" />
          <h3>12,90</h3>
          <h1>BOLO DE CENOURA</h1>
          <h2>DELICIOSO E MACIO</h2>
        </div>

        <div>
          <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/02/53537312-aprenda-como-fazer-bolo-de-banana-com-aveia-simples-fonte-catraca-livre-800x800.jpg" />

          <h3>12,90</h3>
          <h1>BOLO DE CENOURA</h1>
          <h2>DELICIOSO E MACIO</h2>
        </div>

        <div>
          <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/02/53537312-aprenda-como-fazer-bolo-de-banana-com-aveia-simples-fonte-catraca-livre-800x800.jpg" />
          <h3>12,90</h3>
          <h1>BOLO DE CENOURA</h1>
          <h2>DELICIOSO E MACIO</h2>
        </div>

        <div>
          <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/02/53537312-aprenda-como-fazer-bolo-de-banana-com-aveia-simples-fonte-catraca-livre-800x800.jpg" />

          <h3>12,90</h3>
          <h1>BOLO DE CENOURA</h1>
          <h2>DELICIOSO E MACIO</h2>
        </div>
          <div>
          <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/02/53537312-aprenda-como-fazer-bolo-de-banana-com-aveia-simples-fonte-catraca-livre-800x800.jpg" />
          <h3>12,90</h3>
          <h1>BOLO DE CENOURA</h1>
          <h2>DELICIOSO E MACIO</h2>
        </div>

        <div>
          <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/02/53537312-aprenda-como-fazer-bolo-de-banana-com-aveia-simples-fonte-catraca-livre-800x800.jpg" />

          <h3>12,90</h3>
          <h1>BOLO DE CENOURA</h1>
          <h2>DELICIOSO E MACIO</h2>
        </div>
          <div>
          <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/02/53537312-aprenda-como-fazer-bolo-de-banana-com-aveia-simples-fonte-catraca-livre-800x800.jpg" />
          <h3>12,90</h3>
          <h1>BOLO DE CENOURA</h1>
          <h2>DELICIOSO E MACIO</h2>
        </div>

        <div>
          <img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2021/09/02/53537312-aprenda-como-fazer-bolo-de-banana-com-aveia-simples-fonte-catraca-livre-800x800.jpg" />

          <h3>12,90</h3>
          <h1>BOLO DE CENOURA</h1>
          <h2>DELICIOSO E MACIO</h2>
        </div>

        
      </span>
    </ProductsStyle>
  );
}

const ProductsStyle = styled.div`
  margin-top: 15vh;
  margin-bottom: 10vh;
  span {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  img {
    width: calc(100% - 20%);
    padding: 5%;
    border-radius: 20%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    padding: 2%;
    cursor: pointer;
    position: relative;
  }

  h1 {
    font-size: 2vh;
    padding: 2%;
  }

  h2 {
    font-size: 1.8vh;
    color: #606060;
  }

  /* confirmar o bottom e o right, pq n tá responsivo */
  h3 {
    color: #ffd84d;
    background-color: #242424;
    clip-path: polygon(0 100%, 100% 0%, 100% 100%, 0% 100%);
    border-radius: 0 0 20% 0;
    position: absolute;
    bottom: 28%;
    right: 9vw;
    padding: 1%;
    font-size: 2vh;
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 6vh;

  }
`;

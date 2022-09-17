import Input from "./Styles/InputStyle";
import Button from "./Styles/ButtonStyle";
import RegisterOrSignIn from "./Styles/RegisterOrLoginStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function RegistrationScreen() {
  const navigate = useNavigate();
  const [registrationInfo, setRegistrationInfo] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
    confirmPassword: "",
  });

  function handleRegistration(e) {
    e.preventDefault();
    setRegistrationInfo({
      ...registrationInfo,
      [e.target.name]: e.target.value,
    })
  }
  
  function sendRegistrationInfo() {
    const promise = axios.post(
      "https://projeto14-ecommerce.herokuapp.com/sign-up",
      registrationInfo
    );

    promise.then((res) => {
    navigate("/sign-in");
    });

    promise.catch((res) => {
      if (res.response.status === 422) {
        alert("Preencha todos os campos corretamente");
        setRegistrationInfo({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          image:""
        })
      }

      if (res.response.status === 409) {
        alert("Este e-mail já está cadastrado");
        setRegistrationInfo({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          image:""
        })
      }

      if (res.response.status === 400) {
        alert("A senha não confere");
        setRegistrationInfo({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          image: ""
        })
      }
    });
  }

  function ChangeScreen() {
    navigate("/sign-in");
  }
  return (
    <RegistrationPadding>
    <RegisterOrSignIn>
      <h1>E-FOOD</h1>
      <Input>
        <form>
          <input
            type="name"
            placeholder="Nome"
            name="name"
            value={registrationInfo.name}
            onChange={handleRegistration}
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={registrationInfo.email}
            onChange={handleRegistration}
          />
           <input
            type="url"
            placeholder="Insira a URL de uma imagem"
            name="image"
            value={registrationInfo.image}
            onChange={handleRegistration}
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={registrationInfo.password}
            onChange={handleRegistration}
          />
          <input
            type="password"
            placeholder="Confirme a senha"
            name="confirmPassword"
            value={registrationInfo.confirmPassword}
            onChange={handleRegistration}
          />
        </form>
      </Input>
      <Button onClick={sendRegistrationInfo}>Cadastrar</Button>
      <h2 onClick={ChangeScreen}>Já tem uma conta? Entre agora!</h2>
      </RegisterOrSignIn>
      </RegistrationPadding>
  );
}


const RegistrationPadding = styled.div`
  background-color: #242424;
  padding: 9vh 3vw;
`;
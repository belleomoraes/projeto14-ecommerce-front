import Input from "./Styles/InputStyle";
import Button from "./Styles/ButtonStyle";
import RegisterOrSignIn from "./Styles/RegisterOrLoginStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  function handleLogin(e) {
    e.preventDefault();
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  }

  function sendLoginInfo() {
    console.log('vou perguntar');
    const promise = axios.post("https://projeto14-ecommerce.herokuapp.com/sign-in", loginInfo);

    console.log('vou perguntar');
    promise.then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("image", res.data.image);
      console.log('perguntei');
      navigate("/");
    });

    promise.catch((res) => {
      if (res.response.status === 422) {
        alert("Preencha todos os campos");
        setLoginInfo({
          email: "",
          password: "",
        });
      }

      if (res.response.status === 400) {
        alert("E-mail ou senha incorretos");
        setLoginInfo({
          email: "",
          password: "",
        });
      }
    });
  }
  function ChangeScreen() {
    navigate("/sign-up");
  }
  return (
    <RegisterOrSignIn>
      <div className="Wrapper">
        <h1>E-FOOD</h1>
        <Input>
          <form>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={loginInfo.email}
              onChange={handleLogin}
            />
            <input
              type="password"
              placeholder="Senha"
              name="password"
              value={loginInfo.password}
              onChange={handleLogin}
            />
            <Button onClick={sendLoginInfo}>Entrar</Button>
                      </form>
        </Input>
        
        <h2 onClick={ChangeScreen}>Primeira vez? Cadastre-se </h2>
      </div>
    </RegisterOrSignIn>
  );
}
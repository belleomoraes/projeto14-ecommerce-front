import "../reset.css";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import UserContext from "../context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomeScreen/Home";
import History from "./HistoryScreen/History";
import LoginScreen from "./SignIn&UpScreens/LoginScreen";
import RegistrationScreen from "./SignIn&UpScreens/RegistrationScreen";
import CartPage from "./cart/cartPage";
import { useState } from "react";


export default function App() {
  const [openOptions, setOpenOptions] = useState(false)
  const [totalValue, setTotalValue] = useState(0);
  const [arrProducts, SetArrProducts] = useState([]);
  return (
    <UserContext.Provider value={{
      openOptions, setOpenOptions,
      setTotalValue, totalValue,
      arrProducts, SetArrProducts
    }}>
      <GlobalStyle openOptions = {openOptions}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/sign-in" element={<LoginScreen />} />
          <Route path="/sign-up" element={<RegistrationScreen />} />
          <Route path="/history" element={<History/>} />
          
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

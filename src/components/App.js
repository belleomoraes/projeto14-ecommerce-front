import "../reset.css";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import UserContext from "../context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HomeScreen/Home";
import History from "./HistoryScreen/History";

export default function App() {
  return (
    <UserContext.Provider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

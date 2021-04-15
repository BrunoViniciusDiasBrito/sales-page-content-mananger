import React from "react";
import ReactDOM from "react-dom";
import Footer from "./components/Footer";
// import Home from "./components/Home";
// import ViolaoEm8Semanas from "./pages/Violao-em-8-semanas";
// import PacoteLivros from "./pages/Pacote-Livros-Caio-Bottura";
import Meditacao from "./pages/Meditacao";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Meditacao />
      <Footer name="infoprodutomania.com.br" />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

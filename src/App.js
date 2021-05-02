import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ViolaoEm8Semanas from "./pages/Violao-em-8-semanas";
import PacoteLivros from "./pages/Pacote-Livros-Caio-Bottura";
import JaTraining from "./pages/JaTraining";
import JacintoMoney from "./pages/JacintoMoney";
import DesenhandoSemDom from "./pages/Desenhando-sem-dom";
import GuitarraRock from "./pages/Guitarra-Rock";

function App() {
  return (
    <React.StrictMode>
      <Home />
      <Footer name="infoprodutomania.com.br" />
    </React.StrictMode>
  );
}

export default App;

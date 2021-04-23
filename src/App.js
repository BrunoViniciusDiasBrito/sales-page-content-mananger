import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ViolaoEm8Semanas from "./pages/Violao-em-8-semanas";
import PacoteLivros from "./pages/Pacote-Livros-Caio-Bottura";
import JaTraining from "./pages/JaTraining";
import JacintoMoney from "./pages/JacintoMoney";
import DesenhandoSemDom from "./pages/Desenhando-sem-dom";
import ScrollToTop from "./components/scrollToTop";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/metodo-violao-8-semanas"
            exact
            component={ViolaoEm8Semanas}
          />
          <Route
            path="/pacote-livros-caio-bottura"
            exact
            component={PacoteLivros}
          />
          <Route path="/ja-training" exact component={JaTraining} />
          <Route path="/jacinto-money" exact component={JacintoMoney} />
          <Route
            path="/desenhando-sem-dom"
            exact
            component={DesenhandoSemDom}
          />
          <Route component={Home} />
        </Switch>
        <Footer name="infoprodutomania.com.br" />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

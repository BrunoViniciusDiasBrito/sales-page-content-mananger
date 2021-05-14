import Hero from "../components/desenhando_sem_dom/hero";
import Feature5 from "../components/desenhando_sem_dom/feature5";
import Cta from "../components/desenhando_sem_dom/cta";
import Cta2 from "../components/desenhando_sem_dom/cta2";
import MiddleCta from "../components/desenhando_sem_dom/middleCta";
import Modules from "../components/desenhando_sem_dom/modules";
import InfoProduto from "../components/home/infoprodutos";

function createDesenhando() {
  return (
    <div className="desenhando-sem-dom">
      <Hero />
      <Feature5 />
      <MiddleCta />
      <Modules />
      <Cta2 />
      <Cta />
      <InfoProduto />
    </div>
  );
}

export default createDesenhando;

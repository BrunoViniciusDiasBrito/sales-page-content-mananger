import Hero from "../components/dieta_flexivel/hero";
import Feature from "../components/dieta_flexivel/feature";
import Feature2 from "../components/dieta_flexivel/feature2";
import Pricing from "../components/dieta_flexivel/pricing";
import Profile from "../components/dieta_flexivel/profile";
import Cta from "../components/dieta_flexivel/cta";
import ModuloPagamento from "../components/dieta_flexivel/moduloPagamento";

function createPacoteLivrosCaioBottura() {
  return (
    <div className="dieta-flex">
      <Hero />
      <Feature2 />
      <Profile />
      <Feature />
      <Pricing />
      <Cta />
      <ModuloPagamento />
    </div>
  );
}

export default createPacoteLivrosCaioBottura;

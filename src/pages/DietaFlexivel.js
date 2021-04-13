import Hero from "../components/dieta_flexivel/hero";
import Feature from "../components/dieta_flexivel/feature";
import Feature2 from "../components/dieta_flexivel/feature2";
import Clearfix from "../components/dieta_flexivel/clearfix";

function createDietaFlex() {
  return (
    <div className="dieta-flex">
      <Hero />
      <Clearfix />
      <Feature />
      <Feature2 />
    </div>
  );
}

export default createDietaFlex;

import Hero from "../components/meditacao/hero";
import Feature from "../components/meditacao/feature";
import Feature2 from "../components/meditacao/feature2";
import Clearfix from "../components/meditacao/clearfix";
import Pricing from "../components/meditacao/pricing";
import Cta from "../components/meditacao/cta";

function createMeditacao() {
  return (
    <div className="meditacao">
      <Hero />
      <Clearfix />
      <Feature />
      <Feature2 />
      <Pricing />
      <Cta />
    </div>
  );
}

export default createMeditacao;

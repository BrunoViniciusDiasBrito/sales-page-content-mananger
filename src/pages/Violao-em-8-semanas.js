import Hero from "../components/violao_8_semanas/hero";
// import HeroVideo from "../components/violao_8_semanas/heroVideo";
// import Clearfix from "../components/violao_8_semanas/clearfix";
import Feature from "../components/violao_8_semanas/feature";
import Divider from "../components/violao_8_semanas/divider";
import Feature2 from "../components/violao_8_semanas/feature2";
// import Banner from "../components/violao_8_semanas/banner";
// import Testimonial from "../components/violao_8_semanas/testimonial";
// import Pricing from "../components/violao_8_semanas/pricing";
import Cta from "../components/violao_8_semanas/cta";
import OptinCopy from "../components/violao_8_semanas/optin_copy";
import SocialProve from "../components/violao_8_semanas/socialProve";
import SocialProveVideo from "../components/violao_8_semanas/socialProveVideo";
import MidCta from "../components/violao_8_semanas/middleCta";
import Modules from "../components/violao_8_semanas/modules";
import ModuloPagamento from "../components/violao_8_semanas/moduloPagamento";
import Resume from "../components/violao_8_semanas/resume";

function metodoViolao() {
  return (
    <div className="metodoViolao">
      <Hero />
      <Feature />
      <OptinCopy />
      <Divider />
      <Feature2 />
      <SocialProve />
      <SocialProveVideo />
      <MidCta />
      <Modules />
      <Resume />
      <Cta />
      <ModuloPagamento />
    </div>
  );
}

export default metodoViolao;

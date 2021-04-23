import Hero from "../components/jacinto_money/hero";
import Feature from "../components/jacinto_money/feature";
import Feature2 from "../components/jacinto_money/feature2";
// import Feature3 from "../components/jacinto_money/feature3";
// import Feature4 from "../components/jacinto_money/feature4";
import Feature5 from "../components/jacinto_money/feature5";
// import Clearfix from "../components/jacinto_money/clearfix";
import Cta from "../components/jacinto_money/cta";
import Cta2 from "../components/jacinto_money/cta2";
// import Gallery from "../components/jacinto_money/gallery";
// import SocialProveVideo from "../components/jacinto_money/socialProveVideo";
// import Modules from "../components/jacinto_money/modules";

function createJmoney() {
  return (
    <div className="jacinto_money">
      <Hero />
      <Feature2 />
      <Cta2 />
      <Feature />
      <Feature5 />
      <Cta />
    </div>
  );
}

export default createJmoney;

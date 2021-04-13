import Hero from "../components/home/hero";
// import Header from "./Header";
// import HeroVideo from "../components/home/heroVideo";
// import Clearfix from "../components/home/clearfix";
// import Feature from "../components/home/feature";
// import Divider from "../components/home/divider";
// import Feature2 from "../components/home/feature2";
// import Banner from "../components/home/banner";
// import Testimonial from "../components/home/testimonial";
import InfoProduto from "../components/home/pricing";
import Cta from "../components/home/cta";
// import Ads from "../components/home/ads";

function createHome() {
  const mediator = true;

  return (
    <div className="homePage">
      <Hero isTrue={mediator} />
      <InfoProduto />
      <Cta />
    </div>
  );
}

export default createHome;

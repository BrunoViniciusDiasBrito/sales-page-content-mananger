import Hero from "../components/guitarra_rock/hero";
import ModPag from "../components/guitarra_rock/moduloPagamento";
import Avatar from "../components/guitarra_rock/painAvatar";
import Advantages from "../components/guitarra_rock/advanteges";
import Bundle from "../components/guitarra_rock/courseBundle";
import Modules from "../components/guitarra_rock/modules";
import Cta from "../components/guitarra_rock/cta";
import Social from "../components/guitarra_rock/social";

function createGuitarraRock() {
  return (
    <div className="guitarra-rock">
      <Hero />
      <Avatar />
      <Advantages />
      <Bundle />
      <Modules />
      <Cta />
      <Social />
      <ModPag />
    </div>
  );
}

export default createGuitarraRock;

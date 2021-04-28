import Hero from "../components/guitarra_rock/hero";
import ModPag from "../components/guitarra_rock/moduloPagamento";

function createGuitarraRock() {
  return (
    <div className="guitarra-rock">
      <Hero />
      <ModPag />
    </div>
  );
}

export default createGuitarraRock;

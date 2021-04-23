import dietaFlexivel from "./dietaFlexivel.css";

function createHero() {
  return (
    <section className="df-hero hero-2 bg-dark" id="df-hero">
      <div className="hero-content bg-dark">
        <div className="container">
          <div className="row pt-0 row-content">
            <div
              className="col-12 col-md-5  wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="hero-holder">
                <img
                  className="img-fluid"
                  src="assets/images/infoprod_dieta_flex/capa.png"
                  alt="screens"
                />
              </div>
            </div>
            <div
              className="col-12 col-md-6 offset-md-1  pt-100 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="hero-headline">
                SEM RECORRER A ESTERÓIDES ANABOLIZANTES
              </div>
              <div className="hero-bio">
                COMO TER RESULTADOS SÓLIDOS NA ACADEMIA AINDA QUE VOCÊ SEJA UM
                COMPLETO INICIANTE!
              </div>
              <div className="hero-action">
                <a
                  className="btn btn--orange btn--rounded"
                  href="https://go.hotmart.com/I11401180M"
                >
                  Eu Quero
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createHero;

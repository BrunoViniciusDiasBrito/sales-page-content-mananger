import guitarraRock from "./guitarraRock.css";

function createHero() {
  const beginCall = {
    color: "white",
    marginBottom: "10px",
  };
  return (
    <section className="hero-gr ja--background bg-white" id="GR">
      <div className="bg-dark gr-bending-bg pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12 centralize--text">
              <h1>
                <span className="text-gold">Método comprovado</span>, simples e
                direto sem enrolação!
              </h1>
              <p>
                Mais de 30 mil alunos na nossa plataforma que querem MELHORAR
                suas técnicas da guitarra. Para de uma vez por todas de tocar
                com cifras.
              </p>
            </div>
            <div className="col-12 centralize--video">
              <iframe
                className="pb-50"
                width="1024"
                height="638"
                src="https://www.youtube.com/embed/qgprwopSe6E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-12 col-md-6 col-lg-6 centralize--text">
              <p style={{ marginBottom: "10px" }}>
                ACESSO VITALÍCIO
                <span style={{ textDecoration: "line-through" }}>
                  R$ 497,00
                </span>
              </p>
              <h4 style={beginCall}>Inscreva-se por apenas R$147,00</h4>
              <p>ou 12x R$ 14,90</p>
            </div>
            <div className="col-12 col-md-6 col-lg-6 centralize--video">
              <a
                className="btn-gr btn--orange-border-gr btn--rounded"
                href="https://p.eduzz.com/3343?a=14668502"
              >
                <span class="lnr lnr-chevron-right-circle spacer"></span>Eu
                Quero
              </a>

              <img
                className="mt-10"
                src="assets/images/infoprod_guitarra_rock/bandeiras-7.png"
                alt="paymentMethods"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createHero;

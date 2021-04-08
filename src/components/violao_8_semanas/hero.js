function createHero() {
  return (
    <section className="hero hero-2 bg-dark" id="hero">
      <div className="hero-content bg-dark info-violao">
        <div className="container">
          <div className="row row-content">
            <div
              className="col-12 col-md-5 pt-50 pt-md-20 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="hero-holder">
                <iframe
                  className="videoInicio"
                  width="530"
                  height="450"
                  src="https://www.youtube.com/embed/m0ui-oAtUBU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div
              className="col-12 col-md-6 offset-md-1  pt-50 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="hero-headline inicial--title--cta">
                Violão do ABSOLUTO ZERO em 8 Semanas
              </div>
              <div className="hero-bio inicial--text--cta">
                O único Método de ensino de violão baseado em aprendizagem
                acelerada que te permite ir do zero ao avançado em apena 8
                semanas mesmo que você acredite não ter talento, dom ou tempo
                para praticar. <br />
                <span>
                  Através de Uma Métodologia Comprovada e Altamente Eficaz
                </span>
              </div>
              <div className="hero-action">
                <a
                  className="btn btn--orange btn--rounded"
                  href="https://go.hotmart.com/B37128315C?ap=3963"
                >
                  Sim, Eu quero
                </a>
              </div>
            </div>
          </div>

          <div className="row pt-50 wow fadeInUp">
            <div className="col-12 col-md-12 col-lg-12 arrow-guide">
              <i className="lnr lnr-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createHero;

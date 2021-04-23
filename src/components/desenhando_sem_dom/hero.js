import desenhando from "./desenhando-sem-dom.css";

function createHero() {
  return (
    <section className="hero-desenhando hero-2" id="heroDesenhando">
      <div className="desenhando-bg-filter">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 centralize--text text-left">
              <h2 className="desenhando-sem-dom-title--white">
                <span className="text-gold">
                  Aprenda De Uma Vez <br />
                  Por Todas a Fazer <br />
                  INCRÍVEIS Desenhos Coloridos
                </span>
              </h2>
            </div>
            <div className="col-12 col-md-6 col-lg-6 centralize--video">
              <iframe
                className="pb-50"
                width="724"
                height="500"
                src="https://www.youtube.com/embed/ATnNFJ2zHKc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className="col-12 centralize--text">
              <a
                className="btn-desenhando-sem-dom btn--purple btn--rounded"
                href="https://go.hotmart.com/Y48895703S?dp=1"
              >
                <span class="lnr lnr-chevron-right-circle spacer"></span>Quero
                aprender
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createHero;

function createFeature() {
  return (
    <section className="feature-left bg-white py-2" id="homeFeature2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 wow fadeInUp">
            <h2 className="heading--title pt-20 text-black text-center">
              QUEM SOU EU? PRAZER,{" "}
              <span className="text-gold">VINI RODRIGUES</span>
            </h2>
          </div>
          <div className="col-12 col-md-6 col-lg-6 wow fadeInUp text-center">
            <img
              className="jacinto-money-image img-fluid center-block"
              src="assets/images/infoprod_jacinto_money/jacinto-money.jpg"
              alt="ipad"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div
              className="feature-panel mb-50 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="feature--icon jm-icon--color-soft">
                <i className="lnr lnr-license"></i>
              </div>
              <div className="feature--content">
                <p className="text-black text-size-medium">
                  <b>Vini Rodrigues</b> é influencer e comediante, tendo mais de
                  5 anos de experiência no mundo digital.
                </p>
                <p className="text-black text-size-medium">
                  Ele ajuda centenas de milhares de pessoas e empresas todos os
                  dias a anunciarem seus produtos na internet e chegou a hora de
                  ensinar a você como é simples iniciar seus negócios de forma
                  muito mais eficaz e prática, trazendo resultados muito
                  melhores e alavancando sua carreira no mundo digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createFeature;

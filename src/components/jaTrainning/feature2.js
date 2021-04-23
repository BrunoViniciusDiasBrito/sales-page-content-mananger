function createFeature() {
  return (
    <section className="feature-left bg-white" id="jaFeature2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-5">
            <div
              className="heading heading-1 mb-60 wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2 className="heading--title pt-20">
                LANÇAMENTO EXCLUSIVO JA TRAINING...
              </h2>
            </div>
            <div
              className="feature-panel mb-50 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="feature--icon ja-icon--color">
                <i className="lnr lnr-chevron-right"></i>
              </div>
              <div className="feature--content">
                <h3>BAIXO CUSTO + FEITO EM MDF E RESINA EPÓXI;</h3>
              </div>
            </div>

            <div
              className="feature-panel mb-50 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="feature--icon ja-icon--color">
                <i className="lnr lnr-chevron-right"></i>
              </div>
              <div className="feature--content">
                <h3>BAIXO CUSTO + FEITO EM MDF E RESINA EPÓXI;</h3>
              </div>
            </div>

            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon ja-icon--color">
                <i className="lnr lnr-chevron-right"></i>
              </div>
              <div className="feature--content">
                <h3>
                  PODE SER FEITO SOB MEDIDA + MUITO MAIS BARATO QUE MARMORE;
                </h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-7 wow fadeInUp">
            <img
              className="img-fluid center-block bancada-resinada"
              src="assets/images/infoprod_ja/bancada-resinada.jpg"
              alt="ipad"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default createFeature;

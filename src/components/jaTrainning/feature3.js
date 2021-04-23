function createFeature() {
  return (
    <section className="feature-left bg-white" id="jaFeature3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-7 wow fadeInUp">
            <img
              className="img-fluid center-block bancada-resinada"
              src="assets/images/infoprod_ja/plataforma-digital.webp"
              alt="ipad"
            />
          </div>

          <div className="col-12 col-md-12 col-lg-5 feature3">
            <div
              className="heading heading-1 mb-60 wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2 className="heading--title pt-20">
                CURSO COM MAIS DE 50 HORAS DE MUITO APRENDIZADO...
              </h2>
            </div>
            <div
              className="feature-panel mb-50 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="feature--icon ja-icon--color">
                <i className="lnr lnr-file-empty"></i>
              </div>
              <div className="feature--content">
                <p>
                  <b>Material de apoio + Apostila</b> para acompanhamento das
                  aulas + passo a passo em vídeo aulas.
                </p>
              </div>
            </div>

            <div
              className="feature-panel mb-50 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="feature--icon ja-icon--color">
                <i className="lnr lnr-screen"></i>
              </div>
              <div className="feature--content">
                <p>
                  Método <b>simples e didático</b>, de fácil entendimento.{" "}
                </p>
              </div>
            </div>

            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon ja-icon--color">
                <i className="lnr lnr-camera-video"></i>
              </div>
              <div className="feature--content">
                <p>
                  Suporte de acesso + suporte técnico direto com o professor +
                  CERTIFICADO.
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

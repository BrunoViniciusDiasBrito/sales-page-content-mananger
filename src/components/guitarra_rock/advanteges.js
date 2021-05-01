function createAdvantages() {
  return (
    <section className="advantages text-center">
      <article className="container">
        <div className="row text-center advantages-wrap">
          <div className="col-12 col-md-12 col-lg-6 offset-lg-3">
            <div
              className="heading heading-1 mb-70 text--center wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2>Kit de Técnica para Guitarra Rock</h2>
              <h6>Conteúdo essencial para desenvolvimento da sua técnica</h6>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 ">
            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon">
                <i className="lnr lnr-clock"></i>
              </div>
              <div className="feature--content">
                <h3>Acesso Vitalício</h3>
                <p>
                  Assista sempre que quiser, no seu tempo. Seu acesso não vai
                  expirar.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 ">
            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon">
                <i className="lnr lnr-cloud-download"></i>
              </div>
              <div className="feature--content">
                <h3>100% Digital</h3>
                <p>
                  Estude em qualquer dispositivo. computador ou smartphone, em
                  qualquer hora e lugar.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 ">
            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon">
                <i className="lnr lnr-checkmark-circle"></i>
              </div>
              <div className="feature--content">
                <h3>Certificado</h3>
                <p>
                  Ao final do curso é disponibilizado um Certificado de
                  Conclusão Digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default createAdvantages;

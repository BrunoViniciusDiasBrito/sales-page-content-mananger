function createBundle() {
  return (
    <section className="course-bundle bg-white">
      <article className="container">
        <div className="row course-bundler-espec">
          <div className="col-12 col-md-12 col-lg-7 wow fadeInUp centralize--text">
            <img
              className="img-fluid center-block"
              src="assets/images/infoprod_guitarra_rock/kitgtr_quadrado.jpg"
              alt="ipad"
            />
          </div>

          <div className="col-12 col-md-12 col-lg-5 bundle-content">
            <div
              className="heading heading-1 mb-60 wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2 className="heading--title pt-20">
                Pacote com os seguintes cursos
              </h2>
            </div>
            <div
              className="feature-panel mb-50 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="feature--icon">
                <i className="lnr lnr-checkmark-circle"></i>
              </div>
              <div className="feature--content">
                <p>Guitarra Rock 2.0</p>
              </div>
            </div>

            <div
              className="feature-panel mb-50 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="feature--icon">
                <i className="lnr lnr-checkmark-circle"></i>
              </div>
              <div className="feature--content">
                <p>Arpejos Guitarra Rock</p>
              </div>
            </div>

            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon">
                <i className="lnr lnr-checkmark-circle"></i>
              </div>
              <div className="feature--content">
                <p>Timbre Ideal</p>
              </div>
            </div>

            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon">
                <i className="lnr lnr-checkmark-circle"></i>
              </div>
              <div className="feature--content">
                <p>Apostila Digital</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default createBundle;

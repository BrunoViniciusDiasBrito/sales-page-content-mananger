function createFeature() {
  return (
    <section className="text-center bg-white" id="homeFeature">
      <div className="container">
        <div className="row clearfix">
          <div className="col-12 col-md-12 col-lg-6 offset-lg-3">
            <div
              className="heading heading-1 mb-70 df-feature-titles wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2 className="heading--title">
                <b>E PARA AJUDAR NA SUA DECISÃO</b>
              </h2>
              <p className="heading--desc">
                Junto com o meu guia de treino eu vou te dar mais
              </p>
              <span className="bonus-text">3 bônus!</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 ">
            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon">
                <img
                  className="bonus-ebook"
                  src="assets/images/infoprod_dieta_flex/poses.jpg"
                  alt="logo hero"
                />
              </div>
              <div className="feature--content">
                <h3>MANUAL DE POSES</h3>
                <p>
                  O manual de poses vai te ensinar as principais poses do
                  fisiculturismo de uma forma rápida e prática com apenas 5
                  passos por pose.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 ">
            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon">
                <img
                  className="bonus-ebook"
                  src="assets/images/infoprod_dieta_flex/receitas.jpg"
                  alt="logo hero"
                />
              </div>
              <div className="feature--content">
                <h3>RECEITAS FLEXIVEIS</h3>
                <p>
                  O livro de receitas te ensina a fazer pratos com ou sem whey,
                  falando brevemente sobre cada ingrediente e suas ações no
                  organismo.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 ">
            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon">
                <img
                  className="bonus-ebook"
                  src="assets/images/infoprod_dieta_flex/dieta.jpg"
                  alt="logo hero"
                />
              </div>
              <div className="feature--content">
                <h3>DIETA FLEXIVEL</h3>
                <p>
                  Um cupom de 50% desconto na compra da segunda edição do livro
                  "Dieta Flexível"
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

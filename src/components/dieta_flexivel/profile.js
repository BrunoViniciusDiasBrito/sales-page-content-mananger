function createFeature() {
  return (
    <section className="feature-left bg-white profile-wrap" id="homeFeature2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-7 wow fadeInUp profile-picture">
            <img
              src="assets/images/infoprod_dieta_flex/caio4.jpg"
              alt="logo hero"
            />
          </div>
          <div className="col-12 col-md-12 col-lg-5">
            <div
              className="heading heading-1 mb-20 wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2 className="heading--title profile-description--title">
                <b>QUEM SOU EU?</b>
              </h2>
              <p className="heading--desc pl-0">
                Meu nome é Caio Bottura, moro atualmente nos Estados Unidos,
                cursei Faculdade de STRENGTH AND CONDITIONING ("FORÇA E
                CONDICIONAMENTO" – Trata-se de um curso superior, como se fosse
                Educação Física só focada nas áreas que lhe dão nome), Já
                competi no Fisiculurismo natural e ganhei 3 titulos na
                categoria. Você talves já me conheça pelo meu canal do youtube
                onde eu mostro meu dia a dia e falo sobre nutrição e
                treinamento.
              </p>
            </div>
            <div
              className="feature-panel mb-50 wow fadeInUp motivation-video"
              data-wow-duration="1s"
            >
              <iframe
                width="430"
                height="277"
                src="https://www.youtube.com/embed/IvM4-bjl3K0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className="col-12 bg-light wow fadeInUp">
            <p className="description-cta">
              Ao longo dos anos li centenas de artigos, estudos, livros sobre
              todos os aspectos do esporte – principalmente o fisiculturismo. já
              tive a oportunidade também de conversar com vários experts da área
              e ser treinado por eles. nesses mais de 10 anos dedicados ao
              fisiculturismo eu percebi que a informação colocada na internet em
              português é muito limitada e escassa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createFeature;

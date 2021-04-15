function createProfile() {
  return (
    <section className="feature-left bg-white" id="profile-feature2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-5">
            <div
              className="heading heading-1 mb-60 wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2 className="heading--title pt-20">
                <b>QUER RESULTADOS SÓLIDOS?</b>
              </h2>
              <p className="heading--desc pl-0">
                Se sim, qual o seu plano ? Eu quero acreditar que você não é
                aquele cara (e nem aquela mina) que acha que basta tomar whey e
                correr na esteira para ter resultados.
              </p>
            </div>
            <div
              className="feature-panel mb-50 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="feature--icon">
                <i className="lnr lnr-book"></i>
              </div>
              <div className="feature--content">
                <p>
                  Foi pensando nas pessoas que têm o desejo de ter um físico de
                  respeito, mas que não têm o plano, que eu desenvolvi "O guia
                  completo de treino" para bodybuilders naturais. Ele junta toda
                  a minha experiência acadêmica, toda a teoria que consumi e
                  toda a prática que ganhei treinando sozinho e com grandes
                  treinadores.
                </p>
              </div>
            </div>

            <div
              className="feature-panel wow fadeInUp explanation-video--icons"
              data-wow-duration="1s"
            >
              <div className="feature--icon">
                <i className="lnr lnr-star"></i>
              </div>
              <div className="feature--content">
                <p>
                  São 150 páginas onde você vai aprender os pilares de um treino
                  bem-sucedido para ganhar massa, definição e até mesmo chegar
                  ao estado de competição – se for esse seu objetivo
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-7 wow fadeInUp explanation-video">
            <iframe
              width="547"
              height="434"
              src="https://www.youtube.com/embed/LAMUaW_Pj3o"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createProfile;

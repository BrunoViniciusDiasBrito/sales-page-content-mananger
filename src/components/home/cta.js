function createCTA() {
  return (
    <section className="cta text-center pb-0 bg-dark" id="cta">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-12 col-lg-6 offset-lg-3 mb-100 wow fadeInUp"
            data-wow-duration="1s"
          >
            <h3>Receba notificações sobre novos infoprodutos</h3>
            <p>
              Digite seu email a baixo e enviaremos EXCLUSIVAMENTE as
              notificações assim que os novos infoprodutos estiverem
              disponiveis.
            </p>
            <a className="btn btn--primary btn--rounded" href="#">
              download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createCTA;

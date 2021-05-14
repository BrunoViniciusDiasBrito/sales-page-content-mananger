function createPricing() {
  const stl = {
    color: "white",
    backgroundColor: "black",
    padding: "20px 20px",
    borderRadius: "100px",
  };
  return (
    <section className="pricing pricing-1 bg-gray" id="pricing">
      <div className="container">
        <div className="row clearfix">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div
              className="heading heading-1 mb-80 text--center wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2 className="heading--title">
                <span style={stl}>Confira também</span>
              </h2>
              <p className="heading--desc">Infoprodutos em Destaque</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className=" col-12 col-md-4 col-lg-4 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel pricing-panel-home">
              <div className="card card-base card-mv8s">
                <div className="card-img-top"></div>
                <div className="card-body card-body--distancer">
                  <h5 className="card-title">MV8S</h5>
                  <a
                    className="btn btn--marine"
                    href="https://violao-em-8-semanas.infoprodutomania.com.br/"
                  >
                    Confira já
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className=" col-12 col-md-4 col-lg-4 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel pricing-panel-home">
              <div className="card card-base card-pacote-livros">
                <div className="card-img-top"></div>
                <div className="card-body card-body--distancer">
                  <h5 className="card-title">Pacote Caio Bottura</h5>
                  <a
                    className="btn btn--marine"
                    href="https://livros-digitais-caio-bottura.infoprodutomania.com.br/"
                  >
                    Confira já
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className=" col-12 col-md-4 col-lg-4 price-table  wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel pricing-panel-home">
              <div className="card card-base card-ja">
                <div className="card-img-top"></div>
                <div className="card-body card-body--distancer">
                  <h5 className="card-title">JA Training</h5>
                  <a
                    className="btn btn--marine"
                    href="https://ja-training.infoprodutomania.com.br/"
                  >
                    Confira já
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-20 mb-20">
          <div
            className=" col-12 col-md-4 col-lg-4 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel pricing-panel-home">
              <div className="card card-base card-jacinto-money">
                <div className="card-img-top"></div>
                <div className="card-body card-body--distancer">
                  <h5 className="card-title">Jacinto Money</h5>
                  <a
                    className="btn btn--marine"
                    href="https://jacinto-money.infoprodutomania.com.br/"
                  >
                    Confira já
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className=" col-12 col-md-4 col-lg-4 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel pricing-panel-home">
              <div className="card card-base card-desenhando-sem-dom">
                <div className="card-img-top"></div>
                <div className="card-body card-body--distancer">
                  <h5 className="card-title">Desenhando sem Dom</h5>
                  <a
                    className="btn btn--marine"
                    href="https://infoprodutomania.com.br/"
                  >
                    Confira já
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className=" col-12 col-md-4 col-lg-4 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel pricing-panel-home">
              <div className="card card-base card-guitarra-rock">
                <div className="card-img-top"></div>
                <div className="card-body card-body--distancer">
                  <h5 className="card-title">Guitarra Rock</h5>
                  <a
                    className="btn btn--marine"
                    href="https://guitarra-rock.infoprodutomania.com.br/"
                  >
                    Confira já
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createPricing;

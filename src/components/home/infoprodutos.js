import { Link } from "react-router-dom";
function createPricing() {
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
                infoprodutos em <span>Destaque</span>
              </h2>
              <p className="heading--desc">Os melhores infoprodutos na web</p>
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
                  <Link
                    to={{
                      pathname: "/metodo-violao-8-semanas",
                    }}
                    className="btn btn--marine"
                  >
                    Confira já
                  </Link>
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
                  <Link
                    to={{
                      pathname: "/pacote-livros-caio-bottura",
                    }}
                    className="btn btn--marine"
                  >
                    Confira já
                  </Link>
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
                  <Link
                    to={{
                      pathname: "/ja-training",
                    }}
                    className="btn btn--marine"
                  >
                    Confira já
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-20">
          <div
            className=" col-12 col-md-4 col-lg-4 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel pricing-panel-home">
              <div className="card card-base card-jacinto-money">
                <div className="card-img-top"></div>
                <div className="card-body card-body--distancer">
                  <h5 className="card-title">Jacinto Money</h5>
                  <Link
                    to={{
                      pathname: "/jacinto-money",
                    }}
                    className="btn btn--marine"
                  >
                    Confira já
                  </Link>
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
                  <Link
                    to={{
                      pathname: "/desenhando-sem-dom",
                    }}
                    className="btn btn--marine"
                  >
                    Confira já
                  </Link>
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

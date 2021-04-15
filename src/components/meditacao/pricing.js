function createPricing() {
  return (
    <section className="pricing pricing-1 bg-gray" id="pricingMeditacao">
      <div className="container">
        <div className="row clearfix">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div
              className="heading heading-1 mb-80 text--center wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2 className="heading--title">Pricing plans</h2>
              <p className="heading--desc">
                we shows only the best websites, portfolios ans landing pages
                built completely with passion, simplicity & creativity
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className=" col-12 col-md-4 col-lg-4 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel">
              <div className="pricing--heading text--center">
                <div className="pricing--icon">
                  {" "}
                  <i className="far fa-file-alt"></i>
                </div>
                <div className="pricing--heading">
                  <p>
                    0<span className="currency">$</span>
                  </p>
                  <div className="pricing--desc">e-book</div>
                </div>
              </div>

              <div className="pricing--body">
                <ul className="pricing--list list-unstyled">
                  <li>Five Brand Monitors</li>
                  <li>Five Keyword Monitors</li>
                  <li>Basic Quota </li>
                </ul>
                <a className="btn btn--primary btn--rounded" href="#">
                  Get Started
                </a>
              </div>
            </div>
          </div>

          <div
            className=" col-12 col-md-4 col-lg-4 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel">
              <div className="pricing--heading text--center">
                <div className="pricing--icon">
                  <i className="far fa-file-pdf"></i>
                </div>
                <div className="pricing--heading">
                  <p>
                    5<span className="currency">$</span>
                  </p>
                  <div className="pricing--desc">soft copy</div>
                </div>
              </div>

              <div className="pricing--body">
                <ul className="pricing--list list-unstyled">
                  <li>Five Brand Monitors</li>
                  <li>Five Keyword Monitors</li>
                  <li>Basic Quota </li>
                </ul>
                <a className="btn btn--primary btn--rounded" href="#">
                  Get Started{" "}
                </a>
              </div>
            </div>
          </div>

          <div
            className=" col-12 col-md-4 col-lg-4 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel">
              <div className="pricing--heading text--center">
                <div className="pricing--icon">
                  <i className="fas fa-book"></i>
                </div>
                <div className="pricing--heading">
                  <p>
                    12<span className="currency">$</span>
                  </p>
                  <div className="pricing--desc">Hard Copy</div>
                </div>
              </div>

              <div className="pricing--body">
                <ul className="pricing--list list-unstyled">
                  <li>Five Brand Monitors</li>
                  <li>Five Keyword Monitors</li>
                  <li>Basic Quota </li>
                </ul>
                <a className="btn btn--primary btn--rounded" href="#">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createPricing;

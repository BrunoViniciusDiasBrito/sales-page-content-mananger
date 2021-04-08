function createFeature() {
  return (
    <section className="text-center bg-white" id="homeFeature">
      <div className="container">
        <div className="row clearfix">
          <div className="col-12 col-md-12 col-lg-6 offset-lg-3">
            <div
              className="heading heading-1 mb-70 text--center wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2 className="heading--title">Sell Your E-book</h2>
              <p className="heading--desc">
                we shows only the best websites, portfolios ans landing pages
                built completely with passion, simplicity &amp; creativity
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 ">
            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon">
                <i className="lnr lnr-bullhorn"></i>
              </div>
              <div className="feature--content">
                <h3>Start your campaign</h3>
                <p>
                  Ebo impresses you with fully responsiveness and highly
                  customization. We did it in combination of very clean and
                  flexible design.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 ">
            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon">
                <i className="lnr lnr-user"></i>
              </div>
              <div className="feature--content">
                <h3>Engage new users</h3>
                <p>
                  Ebo impresses you with fully responsiveness and highly
                  customization. We did it in combination of very clean and
                  flexible design.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 ">
            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon">
                <i className="lnr lnr-chart-bars"></i>
              </div>
              <div className="feature--content">
                <h3>Claim your reward</h3>
                <p>
                  Ebo impresses you with fully responsiveness and highly
                  customization. We did it in combination of very clean and
                  flexible design.
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

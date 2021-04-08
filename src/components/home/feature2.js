function createFeature() {
  return (
    <section className="feature-left bg-white" id="homeFeature2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-5">
            <div
              className="heading heading-1 mb-60 wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2 className="heading--title pt-20">Chapters included</h2>
              <p className="heading--desc pl-0">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat.
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
                <h3>10 Chapters</h3>
                <p>
                  Lorem ipsum dolor sit amet, consive adipisicing elit, sed do
                  eiusmod. tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="feature-panel wow fadeInUp" data-wow-duration="1s">
              <div className="feature--icon">
                <i className="lnr lnr-star"></i>
              </div>
              <div className="feature--content">
                <h3>Goodreads</h3>
                <p>
                  Lorem ipsum dolor sit amet, consive adipisicing elit, sed do
                  eiusmod. tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-7 wow fadeInUp">
            <img
              className="img-fluid center-block"
              src="assets/images/mockup/ipad.jpg"
              alt="ipad"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default createFeature;

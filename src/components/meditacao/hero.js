function createHero() {
  return (
    <section className="hero hero-2 bg-dark" id="heroMeditacao">
      <div className="hero-content bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div
                className="hero-logo mt-100 d-none d-sm-block wow fadeInUp"
                data-wow-duration="1s"
              >
                <img
                  src="assets/images/logo/infoproduto-219.png"
                  alt="logo hero"
                />
              </div>
            </div>
          </div>
          <div className="row pt-0 row-content">
            <div
              className="col-12 col-md-5  wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="hero-holder">
                <img
                  className="img-fluid"
                  src="assets/images/mockup/book.png"
                  alt="screens"
                />
              </div>
            </div>
            <div
              className="col-12 col-md-6 offset-md-1  pt-100 wow fadeInUp"
              data-wow-duration="1s"
            >
              <div className="hero-headline">
                Showcase and sell your e-book in simple way.
              </div>
              <div className="hero-bio">
                This should be used to tell a story and let your users know a
                little more about your product or service.
              </div>
              <div className="hero-action">
                <a className="btn btn--primary btn--rounded" href="#">
                  download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createHero;

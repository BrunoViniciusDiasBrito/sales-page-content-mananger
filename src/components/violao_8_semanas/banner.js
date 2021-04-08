function createBanner() {
  return (
    <section className="banner pt-0 pb-0" id="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 pr-0 pl-0">
            <div className="col-img">
              <div className="bg-section">
                <img
                  src="assets/images/background/bg-1.jpg"
                  alt="Background"
                  width="600px"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-6 col-content pl-100">
            <h3>About author</h3>
            <p>
              Torquent per conubia nostra, per inceptos himenaeos. Mauris in
              erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
              augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
              condimentum fermentum nunc, etiam pharetra, erat sed fermentum
              feugiat.
            </p>
            <img src="assets/images/mockup/signture.png" alt="signture" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default createBanner;

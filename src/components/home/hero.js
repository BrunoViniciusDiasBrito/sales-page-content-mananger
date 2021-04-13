function createHero(props) {
  return (
    <section className="hero hero-2 hero-height bg--home" id="hero">
      <div>
        <div className="container">
          {props.isTrue ? (
            <div className="row pt-50 row-content">
              <div
                className="col-12 offset-md-4 principal--title--banner  pt-100 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="hero-headline">Infoproduto Mania</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default createHero;

const createCta = () => {
  const beginCall = {
    color: "white",
    marginBottom: "10px",
  };
  return (
    <section className="gtr-cta bg-navy">
      <article className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 centralize--text">
            <p style={{ marginBottom: "10px" }}>
              ACESSO VITALÍCIO
              <span style={{ textDecoration: "line-through" }}>R$ 497,00</span>
            </p>
            <h4 style={beginCall}>Inscreva-se por apenas R$147,00</h4>
            <p>ou 12x R$ 14,90</p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 centralize--video">
            <a
              className="btn-gr btn--orange-border-gr btn--rounded"
              href="https://p.eduzz.com/3343?a=14668502"
            >
              <span class="lnr lnr-chevron-right-circle spacer"></span>Eu Quero
            </a>

            <img
              className="mt-10"
              src="assets/images/infoprod_guitarra_rock/bandeiras-7.png"
              alt="paymentMethods"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default createCta;

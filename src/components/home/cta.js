function createCTA() {
  return (
    <section className="cta text-center pb-0 bg-dark" id="cta">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-12 col-lg-6 offset-lg-3 mb-100 wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="feature-icon--greetings">
              <i className="lnr lnr-heart"></i>
            </div>
            <h3>Compromisso e Coerência</h3>
            <p>
              Com você mesmo, ao investir naquilo que ninguém pode tirar de
              você, CONHECIMENTO!
            </p>
            <blockquote>
              <p>
                <i>
                  "Treine enquanto eles dormem, estude enquanto eles se
                  divertem, persista enquanto eles descansam, e então, viva o
                  que eles sonham."
                </i>
                <small>
                  {" "}
                  <br />
                  -Provérbio Japonês
                </small>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createCTA;

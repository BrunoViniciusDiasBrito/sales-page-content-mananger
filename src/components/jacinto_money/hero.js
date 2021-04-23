import jacintoMoney from "./jacintoMoney.css";

function createHero() {
  return (
    <section
      className="hero-jacinto-money hero-2 bg--black"
      id="heroJacintoMoney"
    >
      <div className="bg--black">
        <div className="container">
          <div className="row">
            <div className="col-12 centralize--text">
              <h2 className="jacinto-money-title--white">
                APRENDA DE FORMA <span className="text-gold">SIMPLES</span> E{" "}
                <span className="text-gold">EFICAZ</span> COMO TRANSFORMAR SUA
                INTERNET EM UM NEGÓCIO EXTREMAMENTE LUCRATIVO
              </h2>
              <p>
                (Se você usa sua internet apenas para ver redes sociais, séries
                da Netflix, está perdendo dinheiro que poderia ser para a sua
                família. Aprenda a trilhar uma carreira do ZERO ao SUCESSO no
                mercado digital)
              </p>
            </div>
            <div className="col-12 centralize--video">
              <iframe
                className="pb-50"
                width="724"
                height="538"
                src="https://www.youtube.com/embed/wXWaGrc4AM8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <a
                className="btn-ja btn--gold-border btn--rounded"
                href="https://go.hotmart.com/E50894979A?dp=1"
              >
                <span class="lnr lnr-chevron-right-circle spacer"></span>Quero
                aprender
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createHero;

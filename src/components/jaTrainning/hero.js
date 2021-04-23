import jaTrainning from "./ja-trainning.css";

function createHero() {
  return (
    <section className="hero-ja ja--background bg--black" id="JA">
      <div className="bg--black">
        <div className="container">
          <div className="row">
            <div className="col-12 centralize--text">
              <h1>
                APRENDA A TRABALHAR COM O PRODUTO QUE ESTÁ{" "}
                <span className="text-gold">REVOLUCIONANDO O MERCADO</span> E
                FATURE ALTO...
              </h1>
              <p>
                Com o professor que é referência no mercado e já transformou a
                vida de mais de 25 mil pessoas!
              </p>
            </div>
            <div className="col-12 centralize--video">
              <iframe
                className="pb-50"
                width="724"
                height="538"
                src="https://www.youtube.com/embed/C__JZEFp4og"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <a
                className="btn-ja btn--orange-border btn--rounded"
                href="https://go.hotmart.com/W50939876D?dp=1"
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

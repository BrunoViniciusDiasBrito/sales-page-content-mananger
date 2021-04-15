function createPricing() {
  return (
    <section className="pricing pricing-1 bg-gray" id="pricing">
      <div className="container">
        <div className="row clearfix">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div
              className="heading heading-1 mb-80 text--center wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2 className="heading--title">
                <b>Pilares Importantes</b>
              </h2>
            </div>
          </div>
        </div>
        <div className="row pb-30">
          <div
            className=" col-12 col-md-6 col-lg-6 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel">
              <div className="pricing--heading text--center">
                <div className="pricing--icon">
                  <img
                    src="assets/images/infoprod_dieta_flex/return.png"
                    alt="logo hero"
                  />
                </div>
              </div>

              <div className="pricing--body">
                <p className="advantages-block--title">
                  ESTABELECIMENTO DA ROTINA DE TREINO
                </p>
                <ul className="pricing--list list-unstyled">
                  <li>
                    Treinar não é chegar à academia e fazer qualquer exercício
                    em qualquer ordem. Você pode até ter resultados se proceder
                    assim, mas vai gastar muito de uma coisa que é limitada em
                    nossas vidas: o tempo.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className=" col-12 col-md-6 col-lg-6 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel">
              <div className="pricing--heading text--center">
                <div className="pricing--icon">
                  <img
                    src="assets/images/infoprod_dieta_flex/graphic.png"
                    alt="logo hero"
                  />
                </div>
              </div>

              <div className="pricing--body">
                <p className="advantages-block--title">PROGRESSÃO DE CARGA</p>
                <ul className="pricing--list list-unstyled">
                  <li>
                    Treinar não é só aumentar peso de qualquer jeito a cada X
                    dias. É preciso respeitar seu limite, é preciso respeitar o
                    efeito do estímulo sobre os músculos. O desrepeito é algo
                    que sempre pode custar caro!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className=" col-12 col-md-6 col-lg-6 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel">
              <div className="pricing--heading text--center">
                <div className="pricing--icon">
                  <img
                    src="assets/images/infoprod_dieta_flex/cam.png"
                    alt="logo hero"
                  />
                </div>
              </div>

              <div className="pricing--body">
                <p className="advantages-block--title">
                  AVALIAÇÃO DE PROGRESSO
                </p>
                <ul className="pricing--list list-unstyled">
                  <li>
                    Treinar sem saber se está tendo resultado é inútil. Mas como
                    avaliar o resultado ? Adipômetro ? Espelho ? Balança ? De
                    quanto em quanto tempo ? Lembre-se: potência não é nada sem
                    controle.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className=" col-12 col-md-6 col-lg-6 price-table wow fadeInUp"
            data-wow-duration="1s"
          >
            <div className="pricing-panel">
              <div className="pricing--heading text--center">
                <div className="pricing--icon">
                  <img
                    src="assets/images/infoprod_dieta_flex/gadget.png"
                    alt="logo hero"
                  />
                </div>
              </div>

              <div className="pricing--body">
                <p className="advantages-block--title">MOTIVAÇÃO</p>
                <ul className="pricing--list list-unstyled">
                  <li>
                    Treinar não é só puxar ferro. Se fosse fácil assim, tanta
                    gente não desistiria. O que separa os bem-sucedidos dos
                    demais é a capacidade de manter-se motivado rumo ao
                    objetivo. E acredite em mim: chega um ponto em que tudo à
                    sua volta vai te gritar para desistir.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createPricing;

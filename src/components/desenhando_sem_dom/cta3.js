function createCTA(props) {
  return (
    <section className="cta text-center pb-0 bg--black" id="jmCta">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-12 col-lg-6 offset-lg-3 wow fadeInUp"
            data-wow-duration="1s"
          >
            <h3 className="text-gold">
              CORRA VARÃO, ANTES QUE SE ENCERRE, CORRE ABENÇOADO...
            </h3>
            {props ? (
              <p className="final-copy">
                {props.copy} {props.span}
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="col-12 col-md-12 mb-100 wow fadeInUp cta-value">
            <div className="cta-value-grid">
              <ul>
                <li>
                  Como por em prática uma Estrutura de Vendas Altamente
                  Orgânica.......
                  <span>R$197,00</span>
                </li>
                <li>
                  Acesso a um dos meus produtos Validados e Exclusivos......
                  <span>R$297,00</span>
                </li>
                <li>
                  Como você pode se tornar um vendedor MEGA PERSUASIVO e não
                  perder uma venda.....R$ <span>147,00</span>
                </li>
                <li>
                  Entenda como alcançar seu público alvo em outras plataformas
                  que ninguém te ensina......<span>R$97,00</span>
                </li>
                <li>
                  Bônus #1. Tráfego Pago - Anderson......<span>R$147,00</span>
                </li>
                <li>
                  Bônus #2. Visão de Marketing - Derik.......
                  <span>R$97,00</span>
                </li>
              </ul>
              <h5>EU DECIDI DEIXAR O PREÇO DO MEU CURSO</h5>
              <h4>REALMENTE ACESSÍVEL</h4>
              <h5>
                PORÉM ESSA OFERTA É POR TEMPO LIMITADO, APROVEITE AGORA...
              </h5>
              <p>
                TOTAL: <span>R$982,00</span>
              </p>
            </div>
            <div className="cta-value-box-dsd">
              <p className="indice-dsd">POR APENAS</p>
              <p className="parcelas-value">R$150</p>
              <small>ou 12X DE R$14,61* no cartão</small>
              <a
                className="btn btn--green btn--rounded"
                href="https://go.hotmart.com/Y48895703S?dp=1"
              >
                <span class="lnr lnr-chevron-right-circle spacer"></span>
                Garantir
              </a>
              <small>menos de R$0,50* por dia</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createCTA;

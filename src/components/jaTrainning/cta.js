function createCTA(props) {
  return (
    <section className="cta text-center pb-0 bg--black" id="jaCta">
      <div className="container">
        <div className="row">
          <div
            className="col-12 col-md-12 col-lg-6 offset-lg-3 wow fadeInUp"
            data-wow-duration="1s"
          >
            <h3>VAGAS LIMITADAS GARANTA A SUA AGORA MESMO...</h3>
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
                  COMBO 8 CURSOS JA TRAINING.......<span>R$347,00</span>
                </li>
                <li>
                  LISTA COM OS PRINCIPAIS FORNECEDORES......
                  <span>R$197,00</span>
                </li>
                <li>
                  IMAGENS EM ALTA RESOLUÇÃO PARA UTILIZAR EM SEUS
                  PROJETOS.....R$ <span>147,00</span>
                </li>
                <li>
                  MONTAGEM DE PROJETOS......<span>R$97,00</span>
                </li>
                <li>
                  COMO FAZER ORÇAMENTO......<span>R$97,00</span>
                </li>
                <li>
                  APOSTILA PARA ACOMPANHAMENTO DAS AULAS.......
                  <span>R$47,00</span>
                </li>
              </ul>
              <h4>+BANCADA DE COZINHA RESINADA(lançamento)</h4>
              <h5>
                SUPORTE TÉCNICO VIA WHATS OU LIGAÇÃO...SEM VALOR MENSURÁVEL
              </h5>
              <p>
                TOTAL: <span>R$932,00</span>
              </p>
            </div>
            <div className="cta-value-box">
              <p className="indice">POR APENAS</p>
              <p className="parcelas">12X DE</p>
              <p className="parcelas-value">19,19</p>
              <small>ou R$197,00 á vista no boleto</small>
              <a
                className="btn btn--green btn--rounded"
                href="https://go.hotmart.com/W50939876D?ap=f36e"
              >
                <span class="lnr lnr-chevron-right-circle spacer"></span>
                Garantir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createCTA;

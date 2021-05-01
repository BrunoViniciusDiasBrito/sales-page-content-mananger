const createPagamento = () => {
  return (
    <section className="cta midcta text-center pb-30 bg-white" id="midCta">
      <div className="container">
        <div className="row pb-50 wow fadeInUp">
          <div className="col-12 col-sm-12 col-md-3">
            <img
              src="assets/images/infoprod_dieta_flex/garantia.png"
              alt="garantia"
            />
          </div>

          <div className="col-12 col-sm-12 col-md-8 garante--content">
            <h2>É Vitalicio? Por quanto tempo posso acessar?</h2>
            <h5>
              O acesso é Vitalício, voce pode assistir sempre que quiser. Temos
              alunos que acessam desde 2014 até hoje.
            </h5>

            <h2>Em quanto tempo recebo o acesso depois de pagar?</h2>
            <h5>
              <ul>
                <li>
                  No cartão você receberá o email de acesso em alguns minutos (5
                  minutos).
                </li>
                <li>
                  No boleto pode levar de 1 a 3 dias úteis, feriados e final de
                  semana não contam.
                </li>
              </ul>
            </h5>
          </div>
        </div>
        <hr />
        <div className="row pt-50 wow fadeInUp">
          <div className="col-12 garante--content--pag">
            <h4>Valor normal: R$497,00</h4>
            <h3 className="titulo--valor--color">Por tempo Limitado</h3>
            <div>
              <p>
                Inscreva-se por apenas <span>R$147,00</span>
              </p>
              <small>
                ou 12x de <b>R$14,90</b>
              </small>
            </div>
          </div>
          <div className="col-12 pt-20">
            <a
              className="btn btn--orange btn--rounded"
              href="https://p.eduzz.com/3343?a=14668502"
            >
              Eu Quero
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default createPagamento;

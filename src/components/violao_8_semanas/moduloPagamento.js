const createPagamento = () => {
  return (
    <section className="cta midcta text-center pb-30" id="midCta">
      <div className="container">
        <div className="row pb-50">
          <div className="col-12 col-sm-12 col-md-3">
            <div className="garanteSeal"></div>
          </div>

          <div className="col-12 col-sm-12 col-md-8 garante--content">
            <h2>
              Vamos fazer um trato? Você adquire agora e tem 7 dias para
              utilizar
            </h2>
            <h5>
              Garantia Incondicional de 7 dias. Se você seguir o método,
              praticar os exercícios e em 7 dias achar que não teve nenhuma
              evolução ou que o curso não é para você, é só mandar um e-mail eu
              devolvo todo o seu investimento
            </h5>
          </div>
        </div>
        <hr />
        <div className="row pt-50">
          <div className="col-12 garante--content--pag">
            <h4>Valor normal: R$497,00</h4>
            <h3 className="titulo--valor--color">Promoção Relâmpago!</h3>
            <div>
              <p>
                Apenas 12x de <span>R$19,19</span>
              </p>
              <small>
                ou <b>R$197,00</b> á vista no Boleto ou Cartão
              </small>
            </div>
          </div>
          <div className="col-12 pt-20">
            <a
              className="btn btn--orange btn--rounded"
              href="https://go.hotmart.com/B37128315C?ap=3963"
            >
              Eu Quero
            </a>
          </div>
          <div className="col-6 offset-3 pagSeguroHotmart"></div>
        </div>
      </div>
    </section>
  );
};

export default createPagamento;

const createPagamento = () => {
  return (
    <section className="cta midcta text-center pb-30" id="midCta">
      <div className="container">
        <div className="row pb-50 wow fadeInUp">
          <div className="col-12 col-sm-12 col-md-3">
            <img
              src="assets/images/infoprod_dieta_flex/garantia.png"
              alt="garantia"
            />
          </div>

          <div className="col-12 col-sm-12 col-md-8 garante--content">
            <h2>
              Vamos fazer um trato? Você adquire agora e tem 7 dias para Ler
            </h2>
            <h5>
              Se tem algo que eu aprendi nesses anos como coach é que não
              existem duas pessoas iguais. umas gostam de amarelo, outras de
              azul, e isso é normal e esperado. tenho consciência plena de que
              nem todo mundo vai apreciar o meu livro, portanto dou a minha
              garantia: se em 7 dias você não estiver satisfeito com o que leu,
              eu devolvo seu dinheiro na íntegra.
            </h5>
          </div>
        </div>
        <hr />
        <div className="row pt-50 wow fadeInUp">
          <div className="col-12 garante--content--pag">
            <div>
              <p>
                O Conteúdo é composto por <b>"O GUIA COMPLETO DE TREINO"</b>,
                <b>"MANUAL BÁSICO DE POSES"</b> e <b>"RECEITAS FLEXÍVEIS"</b>.
                Um compilado dos meus <b>MAIS DE 10 ANOS DE EXPERIÊNCIA</b> e de{" "}
                <b>ESTUDOS E FORMAÇÃO ACADÊMICA NO EUA</b> em 4 E-BOOKS para{" "}
                <b>VOCÊ</b>.
              </p>
              <br />
            </div>
            <h4>Valor normal: R$247,00</h4>
            <h3 className="titulo--valor--color">Promoção Relâmpago!</h3>
            <div>
              <p>
                Apenas <span>R$120,00</span> 1x no Cartão
              </p>
              <small>
                ou 12x de <b>R$11,69*</b>
              </small>
              <br />
              <small>*Parcelamento com tarifa de 2.49% a.m</small>
            </div>
          </div>
          <div className="col-12 pt-20">
            <a
              className="btn btn--orange btn--rounded"
              href="https://go.hotmart.com/I11401180M"
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

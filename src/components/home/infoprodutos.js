import videoURL from "./video/banner-animado-infoproduto-mania.mp4";

function CustomButton(props) {
  return (
    <a className="btn btn--rounded btn--marine" href={props.href}>
      Confira já
    </a>
  );
}

function VideoList(props) {
  return (
    <video poster={props.poster} className="video-item" controls loop muted>
      <source src={props.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

function ProductListParts(props) {
  return (
    <div className="col-12 col-md-6 col-lg-6 wow fadeInUp pl-0 product-text-block">
      {props.children}
    </div>
  );
}

function ProductList(props) {
  return <div className="row course-block">{props.children}</div>;
}

function createPricing() {
  const myStyle = {
    display: "block",
  };

  return (
    <section
      className="pricing pricing-1 bg-white infoproduto-background"
      id="newHeroVideo"
    >
      <div className="container">
        <div className="row clearfix">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div
              className="heading heading-1 mb-80 text--center wow fadeInUp"
              data-wow-duration="1s"
            >
              <h2 className="heading--title">
                infoprodutos em <span>Destaque</span>
              </h2>
              <p className="heading--desc">Os melhores infoprodutos na web</p>
            </div>
          </div>
        </div>

        <ProductList>
          <ProductListParts>
            <VideoList
              src={videoURL}
              poster="assets/images/home/thumbs/mv8s-thumb.png"
            />
          </ProductListParts>

          <ProductListParts>
            <h2>MV8S</h2>
            <p>
              O único Método de ensino de violão baseado em aprendizagem
              acelerada que te permite ir do zero ao avançado em apena 8 semanas
              mesmo que você acredite não ter talento, dom ou tempo para
              praticar. Através de Uma Métodologia Comprovada e Altamente Eficaz
            </p>
            <CustomButton href="" />
          </ProductListParts>
        </ProductList>

        <ProductList>
          <ProductListParts>
            <VideoList
              src={videoURL}
              poster="assets/images/home/thumbs/pacote-livros-caio-bottura.png"
            />
          </ProductListParts>

          <ProductListParts>
            <h2>Pacote Caio Bottura</h2>
            <p>
              Foi pensando nas pessoas que têm o desejo de ter um físico de
              estético o guia completo de treino. Ele junta toda a minha
              experiência acadêmica, toda a teoria que consumi e toda a prática
              que ganhei treinando sozinho e com grandes treinadores.
            </p>
            <CustomButton href="" />
          </ProductListParts>
        </ProductList>

        <div className="row">
          <div className="col-12 text-center pt-50 pb-50 mt-20 mb-20 area-de-anuncio-exemplo">
            <hr /> <h6>Anúncio Aqui</h6> <hr />
          </div>
        </div>

        <ProductList>
          <ProductListParts>
            <VideoList
              src={videoURL}
              poster="assets/images/home/thumbs/JA-Training.png"
            />
          </ProductListParts>

          <ProductListParts>
            <h2>JA Training</h2>
            <p>
              Curso Mais Completo Do Mercado, Passo A Passo Simples E Didático.
              Com as técnicas de aplicação e utilização da resina ensinadas aqui
              na JA você vai estar apto a criar e desenvolver qualquer coisa com
              o produto mesmo que nunca tenha visto sobre isso antes
            </p>
            <CustomButton href="" />
          </ProductListParts>
        </ProductList>

        <ProductList>
          <ProductListParts>
            <VideoList
              src={videoURL}
              poster="assets/images/home/thumbs/jacinto-money.png"
            />
          </ProductListParts>

          <ProductListParts>
            <h2>Jacinto Money</h2>
            <p>
              Vou ensinar para você algumas das minhas estratégias que uso Hoje
              para Faturar 5 Dígitos ou Mais na Internet. Estratégias de tráfego
              orgânico, Tráfego pago de forma que você não precise investir em
              outros treinamentos para se aprimorar!
            </p>
            <CustomButton href="" />
          </ProductListParts>
        </ProductList>

        <div className="row">
          <div className="col-12 text-center pt-50 pb-50 mt-20 mb-20 area-de-anuncio-exemplo">
            <hr /> <h6>Anúncio Aqui</h6> <hr />
          </div>
        </div>

        <ProductList>
          <ProductListParts>
            <VideoList
              src={videoURL}
              poster="assets/images/home/thumbs/desenhando-sem-dom.png"
            />
          </ProductListParts>

          <ProductListParts>
            <h2>Desenhando sem Dom</h2>
            <p>
              O CURSO MAIS COMPLETO DA INTERNET Diversas técnicas que te
              ensinarão do básico ao avançado como colocar a sua imaginação no
              papel, você fará desenhos realistas e irá provar para todos que
              para saber desenhar não precisa ter DOM.
            </p>
            <CustomButton href="" />
          </ProductListParts>
        </ProductList>

        <ProductList>
          <ProductListParts>
            <VideoList
              src={videoURL}
              poster="assets/images/home/thumbs/guitarra-rock.png"
            />
          </ProductListParts>

          <ProductListParts>
            <h2>Guitarra Rock</h2>
            <p>
              Mais de 30 mil alunos na nossa plataforma que querem MELHORAR suas
              técnicas da guitarra. Pare de uma vez por todas de tocar com
              cifras.
            </p>
            <CustomButton href="" />
          </ProductListParts>
        </ProductList>
        <div className="row">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5540347917675823"
            crossorigin="anonymous"
          ></script>
          <div className="col-12 text-center centralize-text">
            <ins
              class="adsbygoogle"
              style={myStyle}
              data-ad-client="ca-pub-5540347917675823"
              data-ad-slot="9248653453"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createPricing;

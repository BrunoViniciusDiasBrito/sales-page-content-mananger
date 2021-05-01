function createAvatar() {
  return (
    <section className="bg-white" id="avatar">
      <article className="container">
        <div className="row">
          <div className="col-12 dores">
            <h1>Você tem esses problemas?</h1>
            <ul>
              <li>
                Decora licks do YouTube mas na hora de tocar não consegue
                aplicar.
              </li>
              <li>Dificuldade para memorizar escalas.</li>
              <li>Aplicá-las de forma musical</li>
              <li>Fica perdido com muitas informações</li>
              <li>
                Improviso fraco, sem vida, sem expressão e ainda tocando notas
                erradas.
              </li>
              <li>Frustrado por não conseguir tocar como queria.</li>
              <li>Não sabe como organizar os estudos e como deve estudar.</li>
              <li>Treina o mês inteiro mas não evolui, se sente estagnado.</li>
            </ul>
          </div>

          <div className="col-12 connection">
            <h1>Eu também passei por isso e posso te afirmar que…</h1>
            <div>
              <p>
                Estudar sozinho é um caminho longo e demorado, na internet tem
                milhões de informações e a pessoa não sabe por onde começar.{" "}
                <br /> Meu método pessoal Guitarra Rock 2.0 traz o conteúdo
                essencial para você tocar melhor, abordando assuntos desde
                formação de escalas até licks e solos mais avançados com aulas
                divididas em módulos na ordem correta para você estudar.
              </p>
            </div>

            <div className="col-12 centralize--video">
              <a
                className="btn-gr btn--orange-gr btn--rounded"
                href="https://p.eduzz.com/3343?a=14668502"
              >
                <span class="lnr lnr-chevron-right-circle spacer"></span>Eu
                Quero
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default createAvatar;

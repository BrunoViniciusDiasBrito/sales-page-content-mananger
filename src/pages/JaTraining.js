import Hero from "../components/jaTrainning/hero";
import Feature from "../components/jaTrainning/feature";
import Feature2 from "../components/jaTrainning/feature2";
import Feature3 from "../components/jaTrainning/feature3";
import Feature4 from "../components/jaTrainning/feature4";
import Feature5 from "../components/jaTrainning/feature5";
import Clearfix from "../components/jaTrainning/clearfix";
import Cta from "../components/jaTrainning/cta";
import Gallery from "../components/jaTrainning/gallery";
import Gallery2 from "../components/jaTrainning/gallery2";
import SocialProveVideo from "../components/jaTrainning/socialProveVideo";
import Modules from "../components/jaTrainning/modules";

function createJA() {
  const copyright = `Nós realmente fazemos questão de apoiar cada um dos nossos alunos, portanto, não podemos receber muitas pessoas nesta turma. Nos últimos dias recebemos centenas de comentários e dezenas de emails de pessoas que desejam começar em nosso curso, porém, as vagas serão aceitas por ordem de chegada `;

  const esgotar = <span>até se esgotarem</span>;
  const poucasVagas = <span>Poucas Vagas Restantes</span>;

  return (
    <div className="jaTrainning">
      <Hero />
      <Clearfix />
      <Feature2 />
      <Gallery />
      <Feature3 />
      <Cta copy={poucasVagas} />
      <SocialProveVideo />
      <Feature />
      <Feature4 />
      <Modules />
      <Gallery2 />
      <Feature5 />
      <Cta copy={copyright} span={esgotar} />
    </div>
  );
}

export default createJA;

import infoProd from "./video/banner-animado-infoproduto-mania.mp4";

const createHeroVideo = () => {
  return (
    <section className="heroVideo hero-2" id="heroVideo">
      <div className="">
        <video className="video-item" autoPlay loop muted>
          <source src={infoProd} type="video/mp4" />
          <source src={infoProd} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default createHeroVideo;

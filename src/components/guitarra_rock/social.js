function createSocial() {
  return (
    <section
      className="social-prove text-center gtr-social bg-white"
      id="socialProveVideo"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 mb-30 wow fadeInUp" data-wow-duration="1s">
            <h3 className="social-prove--video">RESULTADOS REAIS...</h3>
            <h5>
              Confira abaixo os trabalhos de nossos alunos e o que eles tem a
              dizer!
            </h5>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 mb-30 mr-10 wow fadeInUp"
            data-wow-duration="1s"
          >
            <iframe
              className="videoInicio"
              width="1111"
              height="608"
              src="https://www.youtube.com/embed/xgUB74eimZo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 col-md-4 mb-30 mr-10 wow fadeInUp"
            data-wow-duration="1s"
          >
            <iframe
              className="videoInicio"
              width="350"
              height="180"
              src="https://www.youtube.com/embed/RmQ29rzBMhE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div
            className="col-12 col-md-4 mb-30 mr-10 wow fadeInUp"
            data-wow-duration="1s"
          >
            <iframe
              className="videoInicio"
              width="350"
              height="180"
              src="https://www.youtube.com/embed/kihtybfNUws"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div
            className="col-12 col-md-4 mb-30 mr-10 wow fadeInUp"
            data-wow-duration="1s"
          >
            <iframe
              className="videoInicio"
              width="350"
              height="180"
              src="https://www.youtube.com/embed/3DZRXLv7sxc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default createSocial;

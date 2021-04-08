function createFooter(props) {
  return (
    <footer className="footer footer-5" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 text--center">
            <div className="footer--copyright">
              <span>
                &copy;crafted With <i className="fas fa-heart"></i> by{" "}
              </span>
              <a href="https://infoprodutomania.com.br">{props.name}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default createFooter;

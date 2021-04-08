function createHeader() {
  return (
    <header
      className="header header-1 header-transparent header-fixed"
      id="navbar-spy"
    >
      <nav
        className="navbar navbar-hidden navbar-sticky navbar-expand-lg"
        id="primary-menu"
      >
        <div className="container">
          {" "}
          <a className="logo navbar-brand" href="index.html">
            <img
              className="logo logo-dark"
              src="assets/images/logo/infoproduto-94x66.png"
              alt="Logo"
            />
            <img
              className="logo logo-light"
              src="assets/images/logo/logo-light.png"
              alt="Lenoto Logo"
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" data-scroll="scrollTo" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-scroll="scrollTo" href="#pricing">
                  Infoprodutos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-scroll="scrollTo" href="#cta">
                  Receba
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default createHeader;

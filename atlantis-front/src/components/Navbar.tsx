const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Atlantis
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Clientes
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/cadastrarcliente">
                      Cadastrar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/listarclientes">
                      Listar
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hospedagem
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="cadastrarhospedagem">
                      Cadastrar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/listaracomodacoes">
                      Listar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

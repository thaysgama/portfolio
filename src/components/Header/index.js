import "./style.scss";



function Header() {
    

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#app">
            tg
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
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="mailto:thaysgama@gmail.com" onclick="window.location=another.html">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

const Navbar = () => {
    return (
        <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">ZJ Health</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Directory</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="#cards">Appointments</a></li>
                      <li><a className="dropdown-item" href="#cards">Perscriptions</a></li>
                      <li><a className="dropdown-item" href="#cards">Lab Testing</a></li>
                    </ul>
                  </li>
              </ul>
              <a href="login.html"><button className="btn btn-outline-success" type="submit">Login</button></a>
            </div>
          </div>
        </nav>
        <br />
      </header>
      );
}
 
export default Navbar;
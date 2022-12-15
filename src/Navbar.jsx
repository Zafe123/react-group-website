import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow page-padding sticky-top py-4">
      <div className="container-fluid px-5">
        <Link to="/" className="navbar-brand"><i class="fa-regular fa-file-code"></i><i class="fa-solid fa-g"></i>roup 3</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><Link to="/" className="nav-link active" >
              Home
            </Link></li>
            <li class="nav-item"><Link to="/about" className="nav-link px-3">
              About
            </Link></li>
            <li class="nav-item"><Link to="/contact" className="nav-link">
              Contact
            </Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
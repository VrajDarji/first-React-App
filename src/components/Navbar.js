import logo from "../images/logo.svg";
import Links from "./pageLinks";
import Slinks from "./socialLinks";

function showLinks() {
  const btn = document.getElementsByClassName(".nav-toggle");
  const links = document.getElementsByClassName(".nav-links");
  if (!links.classList.contains("show-links")) {
    links.classList.add("show-links");
  }
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={showLinks}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <Links parentClass='nav-links' itemClass='nav-link'/>
        <Slinks parentClass='nav-icons' itemClass="nav-icon" />
      </div>
    </nav>
  );
}

export default Navbar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-dark">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link to="/">
            <FontAwesomeIcon id="icon" icon="home" size="lg" />
          </Link>
        </li>
        <li class="nav-item active">
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

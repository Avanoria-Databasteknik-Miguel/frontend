import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <header id="nav-header">
      <span >
        <Link to="/" id={"logo"}>
          <FontAwesomeIcon icon={faScroll}  />
        </Link>
      </span>
      <nav id="website-navigation">
        <ul id="nav-links">
          <li>
            <NavLink to={"/teachers"} className={"nav-link"}>Teachers</NavLink>
          </li>
                    <li>
            <NavLink to={"/students"} className={"nav-link"}>Students</NavLink>
          </li>
           <li>
            <NavLink to={"/courses"} className={"nav-link"}>Courses</NavLink>
          </li>
        </ul>
      </nav>
      <span id="user-icon">
        <FontAwesomeIcon icon={faUser} />
      </span>
    </header>
  );
};

export default NavBar;

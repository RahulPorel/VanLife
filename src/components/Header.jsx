import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>

      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/vans"
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <i className="fa-solid fa-user login-icon"></i>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

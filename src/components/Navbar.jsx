import { NavLink } from "react-router-dom";
import "../styles/App.css"

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/lenguajes">Lenguajes</NavLink>
      <NavLink to="/agregar">Agregar lenguaje</NavLink>
      <NavLink to="/acerca-de">Acerca de</NavLink>
    </nav>
  );
}

export default Navbar;

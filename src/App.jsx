import { NavLink } from 'react-router-dom'
import './App.css'
import './styles/Navbar.css'
import AppRoutes from './router'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/lenguajes">Lenguajes</NavLink>
      <NavLink to="/personajes">Rick and Morty</NavLink>
      <NavLink to="/agregar">Agregar lenguaje</NavLink>
      <NavLink to="/acerca-de">Acerca de</NavLink>
    </nav>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <AppRoutes />

      <footer className="page-footer">
        Hecho con React + Hooks.
        <span>Realizado por Vanesa Rea IDGS 1002</span>
      </footer>
    </>
  )
}

export default App

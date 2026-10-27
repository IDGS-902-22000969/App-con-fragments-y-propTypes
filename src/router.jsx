
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Lenguajes from './Pages/Lenguajes'
import Personajes from './Pages/Personajes'
import AgregarLenguaje from './Pages/AgregarLenguaje'
import AcercaDe from './Pages/AcercaDe'
import NoEncontrado from './Pages/NoEncontrado'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lenguajes" element={<Lenguajes />} />
      <Route path="/personajes" element={<Personajes />} />
      <Route path="/agregar" element={<AgregarLenguaje />} />
      <Route path="/acerca-de" element={<AcercaDe />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  )
}

export default AppRoutes

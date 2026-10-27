
import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <section>
      <h1>404 - Página no encontrada</h1>
      <p>La página que buscas no es la correcta</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}

export default NoEncontrado;

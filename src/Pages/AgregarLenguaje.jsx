
import { useState } from "react";

function AgregarLenguaje() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  function manejarEnvio(e) {
    e.preventDefault();

    if (!nombre.trim() || !descripcion.trim()) {
      alert("Completa todos los campos");
      return;
    }

    alert(`Lenguaje registrado: ${nombre}`);

    setNombre("");
    setDescripcion("");
  }

  return (
    <section>
      <h1>Agregar lenguaje</h1>

      <form onSubmit={manejarEnvio}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. JavaScript"
            required
          />
        </div>

        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Describe el lenguaje"
            required
          />
        </div>

        <button type="submit">Registrar lenguaje</button>
      </form>
    </section>
  );
}

export default AgregarLenguaje;

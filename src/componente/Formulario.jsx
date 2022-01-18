import React from "react";

export const Formulario = ({ data }) => {
  if (data.username === "") {
    return;
  } else {
    return (
      <div className="container ">
        <label>Nombre</label>
        <input
          type="texto"
          placeholder="Nombre"
          className="form-control"
          id="name"
          defaultValue={data.nombre}
        />

        <br />
        <label>Usuario</label>
        <input
          type="texto"
          placeholder="Usuario"
          className="form-control"
          id="user"
          defaultValue={data.usuario}
        />

        <br />
        <label>Correo</label>
        <input
          id="email"
          type="texto"
          placeholder="Correo"
          className="form-control"
          defaultValue={data.correo}
        />
      </div>
    );
  }
};

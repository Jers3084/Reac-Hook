import React, { useState, useEffect } from "react";
import { Navbar } from "./componente/Navbar";
import { Datalist } from "./componente/Datalist";
import { Formulario } from "./componente/Formulario";

function App() {
  const [lista, setLista] = useState([]);
  const [datos, setDatos] = useState({});

  useEffect(() => {
    console.log("Ejecuto useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((resultado) => {
        setLista(resultado);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, []);

  function mostrarobj1(datosalform) {
    const user = datosalform.current.value;

    if (user === "") {
      alert("Debe ingresar un Username");
    } else {
      lista.map((post) => {
        if (post.username.toLowerCase() === user.toLowerCase()) {
          setDatos({
            nombre: post.name,
            usuario: post.username,
            correo: post.email,
          });
        }
        return datos;
      });
    }
  }

  function mostrarobj(datosalformulario) {
    setDatos({
      nombre: datosalformulario.name,
      usuario: datosalformulario.username,
      correo: datosalformulario.email,
    });
  }

  return (
    <div>
      <Navbar mostrarobj1={mostrarobj1} />
      <Datalist lista={lista} mostrarobj={mostrarobj} />
      <Formulario data={datos} />
    </div>
  );
}

export default App;

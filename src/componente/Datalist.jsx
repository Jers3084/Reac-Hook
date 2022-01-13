import React, { useState, useEffect } from "react";
import { Formulario } from "./Formulario";


export const Datalist = () => {
  const [lista, setLista] = useState([]);
  const [datos, setDatos] = useState([])
  

  useEffect(() => {
    console.log("Ejecuto useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((resultado) => {
        setLista(resultado);
      });

  }, []);


  function mostrar(objeto){
    setDatos([objeto.name, objeto.username, objeto.email]);
  }

  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Usuario</th>
            <th scope="col">Email</th>
            <th scope="col">Mantenimientos</th>
          </tr>
        </thead>
        <tbody>
          {
          lista.map((el) => {
            return (
              
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                  <td>{el.username}</td>
                  <td>{el.email}</td>
                  <td ><button onClick={() => mostrar(el)} className="btn btn-success">Editar</button></td>
                </tr>
              
            );
          })
          }
        </tbody>
      </table>
      <Formulario d={datos}/>
    </div>
  )
};

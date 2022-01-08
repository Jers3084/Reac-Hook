import React, { useState, useEffect } from "react";

export const Estado = () => {
  const [lista, setLista] = useState([]);
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log("Ejecuto useEffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((resultado) => {
        setLista(resultado);
      });

    //setLista(alumnos);
  }, []);

  //const [nombre, setNombre] = useState('Hola');

  function mostrar(objeto){
    setName(objeto.name);
    setUser(objeto.username);
    setEmail(objeto.email);

    
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
                  <td ><a onClick={() => mostrar(el)} className="btn btn-success">Editar</a></td>
                </tr>
              
            );
          })
          }
        </tbody>
      </table>
      <div className='container '>
         <label>Nombre</label>
         <input 
            type='texto' 
            placeholder='Nombre' 
            className='form-control'
            id='name'
            defaultValue={name}
            //onChange={(e) => setNombre(e.target.value)}
         />
            
            <br/>
            <label>Usuario</label>
         <input 
            type='texto' 
            placeholder='Usuario' 
            className='form-control'
            id="user"
            defaultValue={user}
         />
            
            <br/>
            <label>Correo</label>
            <input 
            id='email'
            type='texto' 
            placeholder='Correo' 
            className='form-control'
            defaultValue={email}
            //onChange={(e) => setCorreo(e.target.value)}
         />
      </div>
    </div>
  );
};

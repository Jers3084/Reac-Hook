import React, { useState } from 'react'

export const Nombre = () => {
   const [nombre, setNombre] = useState('');
   const [usuario, setUsuario] = useState('');
   const [correo, setCorreo] = useState('');

    return (
      <div className='container'>
         <input 
            type='texto' 
            placeholder='Ingresa la Informacion' 
            className='form-control'
            onChange={(e) => setNombre(e.target.value)}
         />
            <h2>Nombre: {nombre}</h2>
            <br/>
         <input 
            type='texto' 
            placeholder='Usuario' 
            className='form-control'
            onChange={(e) => setUsuario(e.target.value)}
         />
            <h2>Usuario: {usuario}</h2>
            <br/>
            <input 
            type='texto' 
            placeholder='Correo' 
            className='form-control'
            onChange={(e) => setCorreo(e.target.value)}
         />
            <h2>Correo: {correo}</h2>
      </div>
   );
}

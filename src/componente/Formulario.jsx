import React from 'react'

export const Formulario = (props) => {
      return (
         <div className='container '>
         <label>Nombre</label>
         <input 
            type='texto' 
            placeholder='Nombre' 
            className='form-control'
            id='name'
            defaultValue={props.d.nombre}
            
         />
            
            <br/>
            <label>Usuario</label>
         <input 
            type='texto' 
            placeholder='Usuario' 
            className='form-control'
            id="user"
            defaultValue={props.d.usuario}
         />
            
            <br/>
            <label>Correo</label>
            <input 
            id='email'
            type='texto' 
            placeholder='Correo' 
            className='form-control'
            defaultValue={props.d.correo}
            
         />
      </div>
   )
}

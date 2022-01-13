import React, { useState, useRef } from 'react'

export const Navbar = () => {
   const [usuario, setUsuario] = useState('');
   const user= useRef(null);

   function busqueda() {
      setUsuario(user.current.value);
      
   }

   return (
      <div>
         {usuario}
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <p className="navbar-brand" href="#">Trabajo Grupal REACT-HOOKS</p>
            <form className="d-flex">
               <input ref={user}  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
               <button className="btn btn-outline-success" onClick={busqueda}>Search</button>
            </form>
         </div>
        </nav>  
      </div>
   )
}

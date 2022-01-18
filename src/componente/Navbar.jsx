import React, { useRef } from 'react'

export const Navbar = ({mostrarobj1}) => {
   const user= useRef(null);

   
   return (
      <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <p className="navbar-brand" href="#">Trabajo Grupal REACT-HOOKS</p>
            <form className="d-flex">
               <input ref={user}  className="form-control me-2" type="search" placeholder="Introducir User name" aria-label="Search" />
               <button className="btn btn-outline-success"  onClick={(e) => {e.preventDefault(); mostrarobj1(user)}}>Buscar 
               </button>
            </form>
         </div>
        </nav> 
      </div>
   )
}

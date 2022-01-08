import React, { useState } from 'react'

export const Contador = () => {

   const [contador, setContador] = useState(0);
         const sumar = () => {
         console.log('debe sumar');
         if (contador >=10) {
            return;
         }
         setContador(contador +1);
         }

         const restar = () => {
            console.log('debe restar');  
            if (contador <=10) {
               return;
            }
            setContador(contador -1);
         }
   return (
      <div>
         <h1>Contador: {contador}</h1>
         <button className='btn btn-primary' onClick={sumar}>+</button>
         <button className='btn btn-danger' onClick={restar}>-</button>
      </div>
   )
}

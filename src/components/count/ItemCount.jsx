import React, { useState } from "react";
import "./ItemCount.css"

const ItemCount = (props) => {
    const { stock, AgregarAlCarrito } = props;
    const [contador, setContador] = useState(1);

    const suma = () => {
         if(contador < stock) {setContador(contador + 1); }    
  };

     const restar = () => {
          if (contador > 1){setContador(contador - 1); }    
  };

  return (
    <div className="compra">  
        <div className="contador">
            <button onClick={suma}> + </button>
            <p className="numeroDelContador">{contador}</p>
            <button onClick={restar}> - </button>
         </div>    
        
         <button onClick={()=> AgregarAlCarrito(contador)} className="botonSumarACarrito">Añadir al carrito</button>
     </div>
   
  );
};

export default ItemCount;
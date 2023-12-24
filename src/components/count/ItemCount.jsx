import React, { useState } from "react";
import "./ItemCount.css"

const ItemCount = (props) => {
    const { stock } = props;
    const [contador, setContador] = useState(1);

    const suma = () => {
         if(contador < stock) {setContador(contador + 1); }    
  };

     const restar = () => {
          if (contador > 1){setContador(contador - 1); }    
  };

  return (
    <div id="compra">  
        <div id="contador">
            <button onClick={suma}> + </button>
            <p id="numeroDelContador">{contador}</p>
            <button onClick={restar}> - </button>
         </div>    
        
         <button id="botonSumarACarrito">Añadir al carrito</button>
     </div>
   
  );
};

export default ItemCount;
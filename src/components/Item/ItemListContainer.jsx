import React, { useEffect, useState } from "react"
import obtenerProductos from '../utilidades/Data';
import ItemList from "./ItemList";


const ItemListContainer = ({ saludo }) => {
 const [productos, setProductos] = useState([]);

  useEffect (()=>{
    obtenerProductos
    .then((respuesta)=>{setProductos(respuesta);})
    .catch ((error) =>{console.log (error);})
    .finally (()=>{console.log("terminó la promesa");})

  },)

  return (
    <>
    <p>{saludo}</p>
    <ItemList productos={productos}/>
  </>
);
};

export default ItemListContainer;
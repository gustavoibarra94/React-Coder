import React, { useEffect, useState } from "react"
import obtenerProductos from '../../utilidades/Data';
import ItemList from "../ItemList/ItemList";
import './ItemListcontainer.css'


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
    <p className="ItemListContainer">{saludo}</p>
    <ItemList productos={productos}/>
  </>
);
};

export default ItemListContainer;
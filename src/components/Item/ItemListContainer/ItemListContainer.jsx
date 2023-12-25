import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import obtenerProductos from '../../utilidades/Data';
import ItemList from "../ItemList/ItemList";
import './ItemListcontainer.css'


const ItemListContainer = ({ saludo }) => {
 const [productos, setProductos] = useState([]);
 const {categoria} = useParams()

  useEffect (()=>{
    obtenerProductos
    .then((respuesta)=>{
      if(categoria){
        const ProductosFiltrados= respuesta.filter ((producto) => producto.categoria === categoria)
        {setProductos (ProductosFiltrados)}
      } else {setProductos(respuesta)}
      ;})
    .catch ((error) =>{console.log (error);})
    .finally (()=>{console.log("terminó la promesa");})

  },[categoria])

  return (
    <>
    <p className="ItemListContainer">{saludo}</p>
    <ItemList productos={productos}/>
  </>
);
};

export default ItemListContainer;
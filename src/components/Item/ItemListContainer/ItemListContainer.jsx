import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import ItemList from "../ItemList/ItemList";
import {collection, getDocs, query, where} from "firebase/firestore"
import db from "../../../db/db"

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const {categoria} = useParams()

    useEffect (()=>{
      let consulta
      const productosRef = collection (db, "Productos");
        if (categoria){
          consulta= query(productosRef, where("categoria","==",categoria))
        } else {consulta=productosRef}

      getDocs(consulta)
      .then ((respuesta)=> {
        let productosDb =respuesta.docs.map ((producto)=>{
          return {id: producto.id, ... producto.data ()};
        })
        setProductos (productosDb)
      })
        
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
import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import ItemDetail from  '../Itemdetail/ItemDetail.jsx'
import {doc, getDoc} from "firebase/firestore"
import db from "../../../db/db.js"

const ItemDetailContainer= (()=>{
    const [producto, setProducto] =useState({})
    const {id} = useParams ()

        useEffect (()=>{
        const productoRef= doc (db,"Productos",id)
        getDoc(productoRef)
        .then((respuesta)=> {
            const productoDb={id:respuesta.id, ...respuesta.data()};
            setProducto(productoDb)
        });

        },[id])

    return (
        <div>
            <ItemDetail producto ={producto}/>
        </div>
    )

})

export default ItemDetailContainer;

import React, { useEffect, useState } from "react"
import {useParams,Link} from "react-router-dom"

import {doc, getDoc} from "firebase/firestore"
import db from "../../../db/db.js"

import ItemDetail from  '../Itemdetail/ItemDetail.jsx'

const ItemDetailContainer= (()=>{
    const [producto, setProducto] =useState({})
    const [productoExiste,setProductoExiste]= useState (false)
    const {id} = useParams ()

        useEffect (()=>{
        const productoRef= doc (db,"Productos",id)
        getDoc(productoRef)
        .then((respuesta)=> {
            const productoDb={id:respuesta.id, ...respuesta.data()};
            if (!respuesta.exists()){
                setProductoExiste (true)
            }
            setProducto(productoDb)
        });

        },[id])

    return (
        <div>
            { productoExiste ? (
               <div>
                <div > upss! El producto que estás buscando no existe.  </div>
               <Link to="/"> volver al home</Link>
               </div>
               
            ):(<ItemDetail producto ={producto}/> )
            }            
        </div>
    )

})

export default ItemDetailContainer;

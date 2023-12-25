import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import obtenerProductos from '../../utilidades/Data.js'
import ItemDetail from  './ItemDetail.jsx'

const ItemDetailContainer= (()=>{
    const [producto, setProducto] =useState({})
    const {id} = useParams ()
    useEffect (()=>{
        obtenerProductos
        .then ((respuesta)=>{
            const productoEncontrado = respuesta.find ((prod)=> prod.id === id)
            setProducto(productoEncontrado)
        })
    },[])

    return (
        <div>
            <ItemDetail producto ={producto}/>
        </div>
    )

})

export default ItemDetailContainer;

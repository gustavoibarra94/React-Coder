import React, { useEffect, useState } from "react"
import obtenerProductos from '../../utilidades/Data.js'
import ItemDetail from  './ItemDetail.jsx'

const ItemDetailContainer= (()=>{
    const [producto, setProducto] =useState()
    useEffect (()=>{
        obtenerProductos
        .then ((respuesta)=>{
            const productoEncontrado = respuesta.find ((prod)=> prod.id === 're001')
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

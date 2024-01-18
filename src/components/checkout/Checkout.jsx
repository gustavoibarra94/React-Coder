
import { useState,useContext } from "react";
import Form from "./Form"
import {CartContext} from "../../context/cartContext"
import {addDoc,collection} from "firebase/firestore"
import db from "../../db/db"



const Checkout = ()=>{
    const [datosForm,setDatosForm] = useState ({
        nombre:"",
        apellido:"",
        telefono:"",
        email:"",
        fecha: new Date
    })
    const {carrito,totalPrecio} =useContext (CartContext) 

    const guardarDatosInput =(event)=>{
        setDatosForm({...datosForm,[event.target.name]: event.target.value })
    }
    const enviarOrden =(event)=>{
        event.preventDefault()
        const orden = {
            comprador: { ... datosForm},
            productos: [... carrito ],
            precio:  totalPrecio()
    }    
    subirOrden (orden)
     }
     const subirOrden =(orden)=>{
        const ordenesRef = collection (db, "ordenes")
        addDoc (ordenesRef,orden)
        .then ((respuesta)=>console.log (respuesta.id))
     }
    return (
       <div>
        
        <Form datosForm={datosForm} guardarDatosInput={guardarDatosInput} enviarOrden={enviarOrden}/>

       </div>
    )
}

export default Checkout;

import { useState,useContext } from "react";
import { Link } from "react-router-dom";

import {CartContext} from "../../context/cartContext"

import {addDoc,collection} from "firebase/firestore"
import db from "../../db/db"

import Swal from "sweetalert2";

import Form from "./Form"


import './checkout.css'



const Checkout = ()=>{
    const [datosForm,setDatosForm] = useState ({
        nombre:"",
        apellido:"",
        telefono:"",
        email:"",
        emailRepetido:"",
        
    })

    const [idOrden, setIdOrden] =useState (null)
    const {carrito,totalPrecio,borrarCarrito} =useContext (CartContext)

    const guardarDatosInput =(event)=>{
        setDatosForm({...datosForm,[event.target.name]: event.target.value })
    }
    const enviarOrden =(event)=>{
        event.preventDefault()
        if (datosForm.email === datosForm.emailRepetido){
            const orden = {
                comprador: { ... datosForm},
                productos: [... carrito ],
                fecha: new Date(),
                precio:  totalPrecio()
            }
                subirOrden (orden);
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "los emails ingresados no coinciden!",
              });
        }
    
    };

    const subirOrden =(orden)=>{
        const ordenesRef = collection (db, "ordenes")
        addDoc (ordenesRef,orden)
        .then ((respuesta) => setIdOrden (respuesta.id))
        borrarCarrito()
    }
    return (
        <div>
            {idOrden ? (
                <div> 
                    <h2>La orden fue generada correctamente 😃 </h2>
                    <p className="tarjetaDeOrden">  Tú N° de pedido es: {idOrden} </p> 
                    <Link to="/">
                    <button className="botonCheck"> Ver más productos</button>  
                    </Link>                     
                </div>
            ):(
                <div className= "form">
                    <p> Completá los siguentes datos para completar el pedido</p>
                    <Form 
                        datosForm={datosForm}
                        guardarDatosInput={guardarDatosInput} 
                        enviarOrden={enviarOrden}/>                                    
                </div>  
            )}
        </div>
    )
}

export default Checkout;
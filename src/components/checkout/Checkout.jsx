
import { useState,useContext } from "react";
import Form from "./Form"
import {CartContext} from "../../context/cartContext"
import {addDoc,collection} from "firebase/firestore"
import { Link } from "react-router-dom";
import db from "../../db/db"
import './checkout.css'



const Checkout = ()=>{
    const [datosForm,setDatosForm] = useState ({
        nombre:"",
        apellido:"",
        telefono:"",
        email:"",
        emailRepetido:"",
        fecha: new Date
    })
    const [idOrden, setIdOrden] =useState (null)
    const {carrito,totalPrecio,borrarCarrito} =useContext (CartContext) 

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

import {useState} from 'react';
import ItemCount from '../../count/ItemCount.jsx'
import '../Itemdetail/Itemdetail.css'



const ItemDetail =(({producto})=>{
    const [toggle, setToggle] = useState (false)
    const AgregarAlCarrito=((contador)=>{
        console.log (contador)
        setToggle (true)
    })

    return(
        <div className="detalle">
            <div className="infoProducto">
                <p className="nombre-precio">{producto.nombre}</p>
                <img src={producto.imagen} alt={producto.nombre}/>                
            </div> 
            <div className="infoCarrito">
            <p className="descripción">{producto.descripción}</p>
            <p className="nombre-precio">${producto.precio}</p>
            {
            toggle ?(<button className="botonTerminar"> Terminar compra </button>) : (
                <ItemCount stock={producto.stock} AgregarAlCarrito={AgregarAlCarrito}/>
            ) }  

            </div>          

        </div>
    )
})

export default ItemDetail;
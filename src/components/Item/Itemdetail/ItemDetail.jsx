
import {useState, useContext} from 'react';
import ItemCount from '../../count/ItemCount.jsx'
import '../Itemdetail/Itemdetail.css'
import { CartContext } from '../../../context/cartContext.jsx';
import { Link } from "react-router-dom"



const ItemDetail =(({producto})=>{
    const [toggle, setToggle] = useState (false)
    const {añadirProducto}= useContext (CartContext)

    const AgregarAlCarrito=((contador)=>{
        const ProductoNuevo = {...producto,cantidad:contador}
        añadirProducto(ProductoNuevo)
        setToggle (true)
    })

    return(
        <div className="detalle">
            <div className="infoProducto">
                <p className="nombre-precio">{producto.nombre}</p>
                <img src={producto.imagen} alt={producto.nombre}/>                
            </div> 
            <div className="infoCarrito">
            <p className="descripcion">{producto.descripcion}</p>
            <p className="nombre-precio">${producto.precio}</p>
            {toggle ?
                (
                <> 
                 <div className="botones"> 
                     <Link className="botonTerminar" to="/carrito"> Ver Carrito </Link>                        
                     <Link className="botonSeguirComprando" to="/"> Seguir comprando </Link>
                 </div>                  
                        
                </> 
                ):(
                    
                    <ItemCount stock={producto.stock} AgregarAlCarrito={AgregarAlCarrito}/>
              
                 )}  

            </div>          

        </div>
    )
})

export default ItemDetail;
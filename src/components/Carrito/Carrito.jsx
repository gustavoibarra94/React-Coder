import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import '../../components/Carrito/carrito.css'

const Carrito = ()=>{
    const {carrito, borrarCarrito, borrarProducto} = useContext (CartContext)
    return(
        <div className="carrito">
            <ul className="lista">
                {carrito.map ((producto) => (
                    <li key={producto.id}>
                        <img className="imagencarrito" src={producto.imagen} alt={producto.nombre}/> 
                        <p>{producto.nombre}</p>
                        <p>{producto.cantidad}</p>
                        <button className="botoncarrito" onClick= {() => borrarProducto(producto.id)}>Eliminar Producto</button>

                    </li>
                ))} 
            </ul> 

            <button className="botoncarrito" onClick={borrarCarrito}> Eliminar Carrito</button>      
            <button className="botoncompra"> Finalizar Compra</button> 
        </div>

    )
}

export default Carrito;
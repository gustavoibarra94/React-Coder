import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import '../../components/Carrito/carrito.css'
import { Link } from "react-router-dom";

const Carrito = ()=>{
    const {carrito, borrarCarrito, borrarProducto,totalPrecio} = useContext (CartContext)

    if (carrito.length === 0 ){
        return (
            <div>
               <h2>Ooops! No hay productos en el carrito😅</h2>
               <Link to="/">Volver al Home</Link>
            </div>
        )
    }
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
            <h2>Total ${totalPrecio()}</h2>                  
            <button className="botoncompra"> Finalizar Compra</button> 
            <button className="botoncarrito" onClick={borrarCarrito}> Eliminar Carrito</button>
        </div>

    )
}

export default Carrito;
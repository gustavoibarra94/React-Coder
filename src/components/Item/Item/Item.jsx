import './Item.css'
import {Link} from "react-router-dom"

const Item = ({ producto }) => (

    <div className="tarjetas" key={producto.id}>
        <img className="imagen" src= {producto.imagen} alt={producto.nombre}/> 
        <hr/>
        <p>{producto.nombre}</p>
        <p className="precio">${producto.precio}</p>
        <Link to= {`/detalle/${producto.id}`} className="boton">
            <button className="boton"> Ver detalle </button> 
        </Link>
    </div>
 
);

export default Item;
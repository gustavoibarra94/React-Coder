import './Item.css'

const Item = ({ producto }) => (

    <div className="tarjetas" key={producto.id}>
        <img className="imagen" src= {producto.imagen} alt={producto.nombre}/> 
        <hr/>
        <p>{producto.nombre}</p>
        <p className="precio">${producto.precio}</p>
        <button className="boton"> Ver detalle</button>
    </div>
 
);

export default Item;
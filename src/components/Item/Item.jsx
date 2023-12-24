import './item.css'

const Item = ({ producto }) => (
  <div class="containerItem">
     <div className="tarjetas" key={producto.id}>
        <img class="portada" src= {producto.imagen} alt={producto.nombre}/> 
        <p>{producto.nombre}</p>
    </div>
  </div>
 
);

export default Item;
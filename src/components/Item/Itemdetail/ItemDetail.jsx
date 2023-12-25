import ItemCount from '../../count/ItemCount.jsx'

const ItemDetail =(({producto})=>{
    return(
        <div>
            <p>{producto.nombre}</p>
            <img src={producto.imagen} alt={producto.nombre}/>
            <p>{producto.descripción}</p>
            <p>${producto.precio}</p>
            <ItemCount/>


        </div>
    )
})

export default ItemDetail;

import Item from './Item';
import './itemList.css'


const ItemList = ({ productos }) => (
      productos.map((producto) => (
        <div class="containerItemList"> 
              <Item producto={producto} key={producto.id}/>
        </div>   
    ))
  );
  
 

export default ItemList;
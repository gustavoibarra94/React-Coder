import "./cartwidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link} from "react-router-dom"


const CartWidget=()=>{
    const {carrito, totalCantidad}= useContext(CartContext)
    return(

         <Link to="/carrito" id="cartwidget">      

            <img src="/public/img/Cart.png" alt="Carrito"/>

            { carrito.length !== 0 && <p>{totalCantidad()}</p>}
          
         
         </Link>      
          
       
        
    )
}

export default CartWidget
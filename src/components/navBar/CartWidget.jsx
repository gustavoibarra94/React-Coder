import "./cartwidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link} from "react-router-dom"


const CartWidget=()=>{
    const {totalCantidad}= useContext(CartContext)
    return(

         <Link to="/carrito" id="cartwidget">

            <img src="/public/img/Cart.png" alt="Carrito"/>
            <p>{totalCantidad()}</p>
         
         </Link>      
          
       
        
    )
}

export default CartWidget
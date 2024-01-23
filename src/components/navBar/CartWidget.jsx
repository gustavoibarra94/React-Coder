import { useContext } from "react"
import { Link} from "react-router-dom"

import { CartContext } from "../../context/cartContext"

import "./cartwidget.css"


const CartWidget=()=>{
    const {carrito, totalCantidad}= useContext(CartContext)
    return(
         <Link to="/carrito" id="cartwidget">    
            <div className="cart"> 🛒</div>
            { carrito.length !== 0 && <p>{totalCantidad()}</p>}         
         
         </Link>
    )
}

export default CartWidget
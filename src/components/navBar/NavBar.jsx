import { Link } from "react-router-dom"

import CartWidget from "./CartWidget"

import "./navbar.css"

const NavBar = ()=> {
    return( 
        <div id="navbar">
            <Link to="/">
                <img src= "/public/img/logo.png" alt="Logo de Marca"/>
            </Link>
            <ul>
                <li>
                    <Link to="/">Ver Todo</Link>
                </li>
                <li>
                    <Link to="/categoria/partygame">Party Game</Link>
                </li>
                               
                <li>
                    <Link to="/categoria/hasta12">Hasta 12 años</Link>
                </li>
            </ul>
            <CartWidget/>
        </div>

    
    )
}

export default NavBar
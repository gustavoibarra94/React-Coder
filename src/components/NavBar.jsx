import "./navbar.css"
import CartWidget from "./CartWidget"

const NavBar = ()=> {
    return( 
        <div id="navbar">
            <img src= "/public/img/logo.png" alt="Logo de Marca"/>
            <ul>
                    <li>
                        <a href="">Inicio</a>
                     </li>
                    <li>
                        <a href="">Juegos de estrategia</a>
                    </li>
                    <li>
                        <a href="">Party Games</a>
                    </li>
                    <li>
                        <a href="">Juego cooperativo</a>
                    </li>
                    <li>
                        <a href="">Sobre nosotros</a>
                    </li>
            </ul>
            <CartWidget/>
        </div>

    
    )
}

export default NavBar
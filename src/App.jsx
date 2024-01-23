import {BrowserRouter,Routes,Route} from 'react-router-dom';

import {CartProvider} from './context/cartContext.jsx';

import NavBar from './components/navBar/NavBar.jsx'
import ItemListContainer from './components/Item/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/Item/ItemDetailContainer/ItemDetailContainer.jsx';
import Carrito from './components/Carrito/Carrito.jsx';
import Checkout from  './components/checkout/Checkout.jsx';

import './App.css'

function App() { 
  return ( <>      
      <BrowserRouter>
        <CartProvider> 
          <NavBar/>
          <Routes>
            <Route path="/"element={<ItemListContainer saludo="Bienvenidos"/> }/>
            <Route path="/categoria/:categoria" element={<ItemListContainer saludo="Bienvenidos"/>}/>
            <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>     
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="/checkout" element={<Checkout/>} />            
          </Routes>
        </CartProvider>
      </BrowserRouter>    
  </> )
}

export default App


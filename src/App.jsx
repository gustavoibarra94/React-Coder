import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/navBar/NavBar.jsx'
import ItemListContainer from './components/Item/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/Item/ItemDetailContainer/ItemDetailContainer.jsx';

import './App.css'

function App() { 
  return ( <>      
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/"element={<ItemListContainer saludo="Bienvenidos"/> }/>
            <Route path="/categoria/:categoria" element={<ItemListContainer saludo="Bienvenidos"/>}/>
            <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>         
          </Routes>
      </BrowserRouter>    
  </> )
}

export default App


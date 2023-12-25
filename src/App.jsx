import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/navBar/NavBar.jsx'
import ItemListContainer from './components/Item/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/Item/Itemdetail/ItemDetailContainer.jsx';

import './App.css'

function App() { 
  return ( <>
      
      <BrowserRouter>
          <NavBar/>

          <Routes>
            <Route path="/"element={<ItemListContainer saludo="Bienvenidos a esta app de juegos"/> }/>
            <Route path="/catgorias/categoria" element={<ItemListContainer saludo="Bienvenidos a esta app de juegos"/>}/>
            <Route path="/verDetalle/:id" element={<ItemDetailContainer/>}/>
            



          </Routes>
          
          
      
      </BrowserRouter>
      
     

      
 </> )
}

export default App


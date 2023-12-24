
import NavBar from './components/navBar/NavBar.jsx'
import ItemListContainer from './components/Item/ItemListContainer.jsx'
import './App.css'

function App() { 
  return ( <>
      <div>

        <NavBar/>
          
        <ItemListContainer saludo="Bienvenidos a esta app de juegos"/>  
                          
       </div> </>
  )
}

export default App


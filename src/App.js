import React from 'react'
import './App.css'

import { Home } from './componentes/Home.js'
import { Nueva } from './componentes/Nueva.js'
import Jumbotron from "./componentes/Jumbotron.js"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Barra from './componentes/Barra.js'
import {Reserva} from './componentes/Reserva.js'

function App() {
  return (
     <>
      
     <BrowserRouter>
      <Barra></Barra>        
     
     <Routes>
         <Route path='/' element={<Jumbotron></Jumbotron>}  />  
         <Route path='/Menu' element={ <Home></Home> } />
        <Route path='/Nueva' element={<Nueva></Nueva>} /> 
        <Route path='/Reserva' element={<Reserva></Reserva>} ></Route> 
 
         
     </Routes>

      </BrowserRouter >
     
</>
     
   
  )
}

export default App
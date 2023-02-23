import React from 'react'
import "../componentes/Jumbotron.css"


function Jumbotron() {
  return (
    <>
    <div className="contenedor-jumbo">
        <img className="imagen-jumbo" src={require("../componentes/imagenes/portada.jpg")} alt="foto uno"/>

     <div className="contenedor-texto-jumbo">
            <p className="nombre">SABOR MESTIZO </p>
            <p className="frase">TODO HECHO CON CALIDAD</p>
            <p className="texto">SABOR MESTIZO es un restaurante con el sabor característico que el carbón le da a las comidas. Son especialistas en platos regionales que podrás disfrutar en un ambiente amenizado con boleros y música popular. 
                Los platos son grandes, generosos y montañeros. Se recomienda el Róbalo Pura Leña. No es lugar para encontrar sofisticación sino cantidades grandes para calmar el hambre con mucha carne.
            </p>

     </div>

   
  </div>


  
<div className='footer'>

  <div className='dato'>
  <img className="imagen" src={require("../componentes/imagenes/logo.png")} alt="foto uno" /></div>
  
      <div className='dato1'>
      <h3>Horarios de atención</h3>
                <ul>
                    <li>lunea a viernes </li>
                    <li> 10:00 am 9:30 pm </li>
                    <li>sabado </li>
                    <li>10:00 am 6:00 pm </li>
                 <h3> Contactos</h3>
                    <li> josemeridaher@gmail.como</li>
                    <li>5552525252 </li>
                </ul>


      </div>

      <div className='dato'>

        <address>
                        Copyright © -2023 José César Mérida
                        josemeridaher@gmail.como
                        
         </address>
      </div>

  


     
    
</div>


  </>
  )
}

export default Jumbotron

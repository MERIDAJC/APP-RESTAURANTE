import React from 'react'
import "../componentes/Menu.css"

export const Menu = (props) => {
  return (

    <div className="contenedor"> 
           
        <img className="imagen" src={require(`../componentes/imagenes/${props.imagen}.jpg`)} alt="foto uno"/>

    <div className="contenedor-texto">
        <h1>{props.titulo}</h1>
      <p className="articulo">{props.articulo}</p>
      <p className="articulo-costo">{props.costo}</p>
      <p className="artuculo-texto">{props.texto}</p>
      <p className='bebida'>{props.alcohol}</p>
            
      

    </div>

  </div>

   )
}

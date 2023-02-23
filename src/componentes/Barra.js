
import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'


function Barra() {
  return (
    <>
    <MiBarra>
     <div>
     <img src={require("../componentes/imagenes/logo.png")} alt="foto uno" /></div>
     
     <div>
       <ul>
       <li> <Link to='/'>INICIO</Link></li>
       <li> <Link to='/Nueva'>CONOCENOS</Link></li>
       <li> <Link to='/Menu'> MENU</Link></li>
       <li> <Link to='/Reserva'>RESERVA</Link></li>  
       </ul>
     </div>
        
    </MiBarra>
    </>
  )
}

export default Barra

const MiBarra = styled.nav`

img{
  display: flex;
  align-items: center;
  justify-item: center; 
  width: 90px;
  height: 90px;
  margin: 5px;
  box-shadow: 0 3px 13px 5px white
  }
h1 {
    font-weight: 100;
    }
    color: white; 
    padding: 20px;
    background-color: rgb(132, 132, 173);
    display: flex ;
    align-items: center;
    justify-content: space-between;

 ul{
       display: flex;
       flex-direction: row;
       align-items: center;
       color: antiquewhite;
       list-style: none;
       font-size: 20px;
       
       margin-right:80px;
 }
 li{
    text-decoration:none;
    margin-right:2rem;
 }
`
import React from 'react'
import { Menu } from './Menu'

export const Home = () => {
  return (
    <div>
         <h1>NUESTRO MENU</h1>

        <Menu 
        titulo="CORTES Y CARNES" 
        articulo="CHURRASCO (800 G)"
        costo= "$550"
        imagen="churrasco"
        texto="También conocido como Top Sirloin, este corte de carne es magro y jugoso. Es un corte sin hueso que proviene de la parte baja de la cadera. Disfrútalo término medio a 3/4 para conservar suavidad y jugosidad."  />
                
        <Menu 
        titulo="CORTES Y CARNES" 
        articulo="PORTERHOUSE (600 G)"
        costo= "$550"
        imagen="portehouse"
        texto="Exquisito corte de carne proveniente de la parte inferior (short loin) del lomo de res. Posee un hueso que divide la pulpa en 2 porciones: filete y New York. Te sugerimos pedirlo 3/4 para disfrutarlo en su punto."  />

        <Menu 
        titulo="CORTES Y CARNES" 
        articulo="COSTILLITAS AL JEREZ"
        costo= "$550"
        imagen="costilla"
        texto="Un clásico de la Mansión® que podrás disfrutar desde su preparación ya que lo marinamos en tu mesa. Corte con hueso delgado y plano con nuestro marinado especial."  />        
        
        <Menu 
        titulo="BEBIDAS" 
        articulo="COCTELERÍA"
        costo= "$340"
        imagen="cocteleria"
        texto="Te invitamos a probar nuestra coctelería y a disfrutar de bebidas clásicas o refrescantes ¡como lo prefieras!, pero siempre con el toque especial de ."       
        alcohol=" Carajillo,Cosmopolitan,Daiquiri,Clericot,Martini,Piña Colada" /> 
       
        <Menu 
        titulo="BEBIDAS" 
        articulo="LICORES Y DESTILADOS"
        costo= "$340"
        imagen="cocteleria"
        texto="satisfacemos el gusto de todos. En nuestro bar encontrarás disponibles tus marcas favoritas de destilados, cervezas y licores para disfrutar de tus bebidas y cocteles favoritos. ."       
        alcohol=" Anís,Coñac,Ginebra,Licor,Mezcal" />                                                   
          
    

    </div>
  )
}
            
            
            
      

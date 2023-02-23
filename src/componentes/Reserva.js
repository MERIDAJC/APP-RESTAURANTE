import React, { useEffect } from  'react'
import "../componentes/Pru.css";
import {useState} from 'react'
import { db } from './Firebase/Firebase';
import { collection,addDoc,getDocs, doc, deleteDoc,getDoc,setDoc} from 'firebase/firestore'
//import { async } from '@firebase/util';




export const Reserva = () => {
   
    const valorInicial = {
                           nombre:'',
                           telefono:'',
                           mesa:'',
                           fecha:'',
                           }

   
   const [ usuario, setUsuario] = useState (valorInicial)
   
   const [ Lista, setLista] = useState ([])
  
   const [ Actid, setActid] = useState ('')




   const capturarInput = (e)=>{
                   const {name ,value} = e.target;
                   setUsuario({...usuario, [name]:value})
                   }




   const guardarInfo = async(e)=>{
    e.preventDefault();
   console.log(usuario);

           if(Actid === ''){
           try {
              await addDoc(collection(db,'clientes'), {...usuario }
                
              );
            } catch (error) {
                console.log(error)        
           }

          } 
          else{
            await setDoc( doc (db, "clientes",Actid), {...usuario})
          }        
    
    setUsuario({...valorInicial})
    setActid('')
   }
   



   useEffect(()=>{
    const getlista = async()=>{
        try {
            const querySnapshot = await getDocs( collection(db,'clientes'))
            const docs = []
            querySnapshot.forEach((doc)=>{
                 docs.push({...doc.data(),id:doc.id})
                 })

            setLista(docs)     

        } catch (error) {
            console.log(error)
        }
    }
      
   getlista()

   },[Lista])




   const borrarCliente = async(id)=>{
    await deleteDoc(doc(db,'clientes',id))
   }
  
   const getuno = async(id)=>{
    try {
      const documentoRefarencia = doc( db, 'clientes',id)
      const docSnap = await getDoc(documentoRefarencia)  
      setUsuario(docSnap.data())

    } catch (error) {
        console.log(error)
    }
   }
    
   useEffect(()=>{
    if(Actid !==''){
        getuno(Actid)
    }

   },[Actid])




  return (
    <>
    <div>
         <div className='reserva'><h1>Reserva tu Mesa</h1></div>

         <div className='contenedor-formulario'>
            <form onSubmit={guardarInfo}>
                <div>
                    <label>Nombre y Apellido</label>
                    <input type='text' name='nombre' className='inp' onChange={capturarInput} value={usuario.nombre}></input>
                </div>
                <div>
                    <label>Telefono</label>
                    <input type='number' name='telefono' className='inp' onChange={capturarInput} value={usuario.telefono} ></input>
                </div>
                <div>
                    <label>Mesa para </label>
                    <input type='number' name='mesa' className='inp' onChange={capturarInput} value={usuario.mesa} ></input>
                </div>
                <div>
                    <label>Fecha de reserva</label>
                    <input type='datetime-local' name='fecha' className='inp' onChange={capturarInput} value={usuario.fecha} ></input>
                </div>
                <button className='bot'>Guardar</button>



            </form>

         </div>        
       
        <div className='clientes'>

            <h3 className='tit'>clientes</h3>
            
            <div>
                {Lista.map(list =>(
                    
                    <div key={list.id}>
                        <p>Nombre: {list.nombre}</p>
                        <p>Telefono: {list.telefono} </p>
                        <p>Fecha de reserva: {list.fecha}</p>
                        <p>Mesa para: {list.mesa}</p>

                        

                        <button className='eliminar' onClick={() => borrarCliente (list.id)}>Eliminar</button>
                        <button className='actualizar' onClick={()=>setActid( list.id) }>Actualizar</button>
                       

                    </div>
                    

                ))}
            </div>
        </div>
       
         


        
    </div>
    </>
  )
}

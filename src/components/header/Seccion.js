import React, { useState } from "react";
// import { useEffect } from "react";
import "./Seccion.css";

const Seccion = (props) => {  
    
    
    const [disable, setDisable]=useState(true);    
       
    const clickHandlerMat =(event)=>{
        props.onSeccionSelected(event.target.name);
        setDisable (true);
    }
    const clickHandlerMano =(event)=>{
        props.onSeccionSelected(event.target.name);
        setDisable (false);
    }


    // Seguir viendo para acomodar los botones de la SECCION. Anda pero se traba 
    // useEffect(()=>{
    //     switch (props.itemSelected) {
    //         case undefined:
    //           console.log('Undefined');
    //           break;
    //         case 'Materiales':
    //           console.log('Materiales');
    //           setDisable (true);         
    //           break;
    //         case 'Mano de Obra':
    //           console.log('Mano de Obra');   
    //           setDisable (false);
    //           break;       
    //         default:
    //             break; 
    //       }  

    // }) 

 
    return (

        <div className="seccion-content">
            <div className="title-seccion-item">
                <label>Sección</label>
            </div>
            <div>
               <button type="button" name="Materiales" disabled={disable} onClick={clickHandlerMat} className="btn btn-success btn-personal btn-personal-top">Materiales</button>
               <button type="button" name="Mano de Obra" disabled={!disable} onClick={clickHandlerMano} className="btn btn-warning btn-personal">Mano de Obra</button>
            </div>
        </div>
           
    );
}

export default Seccion;
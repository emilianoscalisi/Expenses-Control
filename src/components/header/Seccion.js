import React, { useState } from "react";
import "./Seccion.css";

const Seccion = (props) => {  
    
    const [disable, setDisable]=useState(true);
       
    const clickHandlerMat =()=>{
        setDisable (true);
    }
    const clickHandlerMano =()=>{
        setDisable (false);
    }
   
    return (

        <div className="seccion-content">
            <div className="title-seccion-item">
                <label>Sección</label>
            </div>
            <div>
               <button type="button" disabled={disable} onClick={clickHandlerMat} className="btn btn-success btn-personal btn-personal-top">Materiales</button>
               <button type="button" disabled={!disable} onClick={clickHandlerMano} className="btn btn-success btn-personal">Mano de Obra</button>
            </div>
        </div>
           
    );
}

export default Seccion;
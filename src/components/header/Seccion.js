import React from "react";
import "./Seccion.css";

const Seccion = (props) => {     
       
   
    return (

        <div className="seccion-content">
            <div className="title-seccion-item">
                <label>Sección</label>
            </div>
            <div>
               <button type="button" className="btn btn-success btn-personal btn-personal-top">Materiales</button>
               <button type="button" className="btn btn-success btn-personal">Mano de Obra</button>
            </div>
        </div>
           
    );
}

export default Seccion;
import React from "react";
import "./WhatItem.css";



const WhatItem = (props) => {

    const clickHandler = (event) => {
        event.preventDefault();
        const selected = event.target.textContent;
        props.onItemSelected(selected);
    }  

    return (      
           

        <div className="seccion-content">
            <div className="title-seccion-item">
                <label>Agregar nuevo gasto</label>
            </div>
            
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-sm dropdown-toggle btn-custom" data-toggle="dropdown" aria-expanded="false">
                    Seleccionar
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="b" onClick={clickHandler} >Materiales</a>
                    <a className="dropdown-item" href="a" onClick={clickHandler} >Mano de Obra</a>
                </div>
            </div>
            
        </div>
       
    );
}

export default WhatItem;
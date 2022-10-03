import React from "react";
import "./TotalesItem.css";

const TotalesItem =(props)=>{
    
    return(
        <div className="totales-content">
            <div className="title-total-item">
            <label> Total Mano de Obra y Materiales</label>
            </div>
            <div>
                <label className="label-text pesos" >PESOS:</label>
                <label className="label-amoun pesos bold">$ {props.totales.totalPesos}</label>
            </div>
            <div>
                <label className="label-text dolares" >DOLARES:</label>
                <label className="label-amoun dolares bold">U$S {props.totales.totalDolar}</label>
            </div>
        </div>
    );
}

export default TotalesItem;
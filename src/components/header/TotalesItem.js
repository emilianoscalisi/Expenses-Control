import React from "react";
import "./TotalesItem.css";

const TotalesItem =(props)=>{

    const pesos = parseFloat((props.totales.totalPesos).toFixed(2)).toLocaleString();
    const dolares = parseFloat((props.totales.totalDolar).toFixed(2)).toLocaleString();

    
    return(
        <div className="totales-content">
            <div className="title-total-item">
            <label> Total Mano de Obra y Materiales</label>
            </div>
            <div>
                <label className="label-text pesos" >PESOS:</label>
                <label className="label-amoun pesos bold">$ {pesos}</label>
            </div>
            <div>
                <label className="label-text dolares" >DOLARES:</label>
                <label className="label-amoun dolares bold">U$S {dolares}</label>
            </div>
        </div>
    );
}

export default TotalesItem;
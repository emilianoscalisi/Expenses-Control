import React from "react";
import "./Subtotales.css";

const Subtotales =(props)=>{

    const subtotales = props.data;
    
    const totalPesos= subtotales.reduce((acumulador, actual) => actual.amountPesos + acumulador, 0).toLocaleString();
    const totalDolar= subtotales.reduce((acumulador, actual) => actual.amountDolar + acumulador, 0).toLocaleString();

    return (
        <div className="subtotales-content">
        <div className="title-total-item">
        <label> Subtotales</label>
        </div>
        <div>
            <label className="label-text pesos" >PESOS:</label>
            <label className="label-amoun pesos bold">$ {totalPesos}</label>
        </div>
        <div>
            <label className="label-text dolares" >DOLARES:</label>
            <label className="label-amoun dolares bold">U$S {totalDolar}</label>
        </div>
    </div>
    );
}

export default Subtotales;
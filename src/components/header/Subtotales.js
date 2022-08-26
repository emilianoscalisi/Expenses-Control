import React from "react";
import "./Subtotales.css";

const Subtotales =()=>{

    return (
        <div className="subtotales-content">
        <div className="title-total-item">
        <label> Subtotales</label>
        </div>
        <div>
            <label className="label-text pesos" >PESOS:</label>
            <label className="label-amoun pesos bold">$ {4716000}</label>
        </div>
        <div>
            <label className="label-text dolares" >DOLARES:</label>
            <label className="label-amoun dolares bold">U$S {26000}</label>
        </div>
    </div>
    );
}

export default Subtotales;
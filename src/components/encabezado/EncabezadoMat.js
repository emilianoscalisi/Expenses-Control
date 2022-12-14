import React from "react";
import './Encabezado.css';
import CardHeader from "../cards/CardHeader";


const EncabezadoMat =()=>{
    return(
        <CardHeader className="encabezado encabezado-mat">
                <label className="fecha">Fecha</label>
                <label className="pagoProv" >Proveedores</label>
                <label className="descripcion">Descripcion</label>
                <label className="factura">Factura</label>
                <label className="valor-dolar">Valor U$S</label>
                <label className="valor-pesos">Valor $</label>
            </CardHeader>
    );
}

export default EncabezadoMat;
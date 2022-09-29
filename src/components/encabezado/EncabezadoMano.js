import React from "react";
import './Encabezado.css';
import CardHeader from "../cards/CardHeader";



const EncabezadoMano =()=>{
    return(
        <CardHeader className="encabezado encabezado-mano">
                <label className="fecha">Fecha</label>
                <label className="pagoProv" >Pago a</label>
                <label className="etapa">Etapa</label>
                <label className="comentarios">Comentarios</label>
                <label className="valor-dolar">Valor U$S</label>
                <label className="valor-pesos">Valor $</label>
            </CardHeader>
    );
}

export default EncabezadoMano;
import React from "react";
import "./WhatItem.css";
import CardHeader from "../cards/CardHeader";


const WhatItem = (props) => {

    const clickHandler = (event) => {
        event.preventDefault();
        const selected = event.target.textContent;
        props.onItemSelected(selected);
    }

    return (
        <CardHeader>
            <h1 className="h1-pregunta">Que gasto queres agregar?</h1>
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary dropdown-toggle btn-seleccion btn-custom" data-toggle="dropdown" aria-expanded="false">
                    Selecciona
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="a" onClick={clickHandler} >Mano de Obra</a>
                    <a className="dropdown-item" href="b" onClick={clickHandler} >Materiales</a>
                </div>
            </div>
        </CardHeader>
    );
}

export default WhatItem;
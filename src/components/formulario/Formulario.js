import React, { useState } from "react";
import "./Formulario.css";
import CardHeader from "../cards/CardHeader";


const Formulario = () => {

    const [formState, setFormState] = useState(false);

    const clickHandler =(event)=>{
        event.preventDefault();
        console.log(event.target.textContent);

    }

    if (formState) {


        return (

            <CardHeader>

                if (formState)


                <form className="formulario">

                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input className="input-date" type="Date" min="2022-01-01" />
                        </div>
                        <div className="new-expense__control">
                            <label>Pago a</label>
                            <input className="input-pago" type="text" />
                        </div>
                        <div className="new-expense__control">
                            <label>Etapa N°</label>
                            <input className="input-etapa" type="text" />
                        </div>
                        <div className="new-expense__control">
                            <label>Costo</label>
                            <input className="input-amount" type="number" min="0.01" step="0.01" />
                        </div>
                        <div className="new-expense__actions">
                            <button className="btn btn-success btn-expense" type="submit">New Expense</button>
                            <button className="btn btn-danger btn-cancel" type="button"  >Cancel</button>
                        </div>

                    </div>

                </form>

            </CardHeader>
        );
    } else {
        return (
            <CardHeader>
                <h1 className="h1-pregunta">Que nuevo gasto queres Agregar?</h1>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary dropdown-toggle btn-seleccion" data-toggle="dropdown" aria-expanded="false">
                        Selecciona
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#" onClick={clickHandler} >Mano de Obra</a>
                        <a className="dropdown-item" href="#" onClick={clickHandler} >Materiales</a>
                    </div>
                </div>
            </CardHeader>
        );
    }

}

export default Formulario;
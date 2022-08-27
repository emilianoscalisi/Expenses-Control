import React from "react";
import "./NewExpense.css";
import CardHeader from "../cards/CardHeader";

const NewExpense = (props) => {

    const submitHandler =(event)=>{
        event.preventDefault(); 


    }
    const cancelkHandler =(event)=>{
        event.preventDefault();
        props.onCalcel();
    }

    console.log (props.selectedExpense);

    return (
        <CardHeader>

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
                    <div className="new-expense__control"> 
                        <label>Adjuntar Factura</label>
                        <input type="file"/>                        
                    </div>
                    <div className="new-expense__actions">
                        <button className="btn btn-success btn-expense" type="submit" onClick={submitHandler}>New Expense</button>
                        <button className="btn btn-danger btn-cancel" type="button"  onClick={cancelkHandler}>Cancel</button>
                    </div>

                </div>

            </form>
        </CardHeader>
    );
}

export default NewExpense;
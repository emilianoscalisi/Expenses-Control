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

    let classInput="";
    if (props.selectedExpense === "Mano de Obra"){
        classInput = "input-etapa"
    }else{
        classInput = "input-descripcion"
    }

    return (
        <CardHeader>

            <form className="formulario">

                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input className="input-date" type="Date" min="2022-01-01" />
                    </div>
                    <div className="new-expense__control">
                        {props.selectedExpense === "Mano de Obra" ? <label>Pago a</label> : <label>Proveedor</label>}
                        <input className="input-pago" type="text" />
                    </div>
                    <div className="new-expense__control">
                        {props.selectedExpense === "Mano de Obra" ? <label>Etapa N°</label> : <label>Descripcion</label>}                        
                        <input className={classInput} type="text" />
                    </div>
                    <div className="new-expense__control">
                        <label>Costo</label>
                        <input className="input-amount" type="number" min="0.01" step="0.01" />
                    </div>

                    {props.selectedExpense === "Materiales" && 
                    <div className="new-expense__control"> 
                        <label>Adjuntar Factura</label>
                        <input type="file" className="adjuntar"/>                        
                    </div>}

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
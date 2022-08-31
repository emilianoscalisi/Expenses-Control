import React, { useState } from "react";
import "./NewExpense.css";
import CardHeader from "../cards/CardHeader";

const NewExpense = (props) => {

    const [pagoProvEntred, setPagoProv] = useState("");
    const [etapDescrEntred, setEtapDescr] = useState("");
    const [amountEntred, setAmount] = useState("");
    const [dateEntred, setDate] = useState("");


    const submitHandler = (event) => {
        event.preventDefault();

        if (props.selectedExpense === "Mano de Obra") {
            const expenseData = {
                seccion: "Mano de Obra",
                pagoProv: pagoProvEntred,
                etapDescr: etapDescrEntred,
                amount: amountEntred,
                date: new Date(dateEntred)
            }            
            props.onSaveData(expenseData);

        } else {
            const expenseData = {
                seccion: "Materiales",
                pagoProv: pagoProvEntred,
                etapDescr: etapDescrEntred,
                amount: amountEntred,
                date: new Date(dateEntred)
            }
            props.onSaveData(expenseData);
        }

        setPagoProv("");
        setEtapDescr("");
        setAmount("");
        setDate("");
    }   

const chagePagoProv = (event) => {
    setPagoProv(event.target.value);
    console.log(event.target.value);

}

const chageEtapDescr = (event) => {
    setEtapDescr(event.target.value);
}

const chageAmount = (event) => {
    setAmount(event.target.value);
}

const chageDate = (event) => {
    setDate(event.target.value);
}


const cancelkHandler = (event) => {
    event.preventDefault();
    props.onCalcel();
}

let classInput = "";
if (props.selectedExpense === "Mano de Obra") {
    classInput = "input-etapa"
} else {
    classInput = "input-descripcion"
}

return (
    <CardHeader>

        <form className="formulario" onSubmit={submitHandler}>

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input className="input-date" type="Date" value={dateEntred} onChange={chageDate} min="2022-01-01" />
                </div>
                <div className="new-expense__control">
                    {props.selectedExpense === "Mano de Obra" ? <label>Pago a</label> : <label>Proveedor</label>}
                    <input className="input-pago" type="text" value={pagoProvEntred} onChange={chagePagoProv} />
                </div>
                <div className="new-expense__control">
                    {props.selectedExpense === "Mano de Obra" ? <label>Etapa N°</label> : <label>Descripcion</label>}
                    <input className={classInput} type="text" value={etapDescrEntred} onChange={chageEtapDescr} />
                </div>
                <div className="new-expense__control">
                    <label>Costo</label>
                    <input className="input-amount" type="number" value={amountEntred} onChange={chageAmount} min="0.01" step="0.01" />
                </div>

                {props.selectedExpense === "Materiales" &&
                    <div className="new-expense__control">

                        <label className="custom-file-upload">
                            <input type="file" hidden />
                            Custom Upload
                        </label>
                    </div>}

                <div className="new-expense__actions">
                    <button className="btn btn-success btn-expense" type="submit">New Expense</button>
                    <button className="btn btn-danger btn-cancel" type="button" onClick={cancelkHandler}>Cancel</button>
                </div>

            </div>

        </form>
    </CardHeader>
);
}

export default NewExpense;
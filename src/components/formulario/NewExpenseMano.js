import React, { useState } from "react";
import "./NewExpense.css";
import CardHeader from "../cards/CardHeader";

const NewExpenseMano = (props) => {

    const [pagoEntred, setPago] = useState("");
    const [etapaEntred, setEtapa] = useState("");
    const [amountEntred, setAmount] = useState("");
    const [dateEntred, setDate] = useState("");


    const submitHandler = (event) => {
        event.preventDefault();

        const localDate = new Date(dateEntred);

        const expenseDataMano = {
            seccion: "Mano de Obra",
            pago: pagoEntred,
            etapa: etapaEntred,
            amount: amountEntred,
            date: new Date(localDate.getUTCFullYear(), localDate.getUTCMonth(), localDate.getUTCDate())
        }
        props.onSaveData(expenseDataMano);

        setPago("");
        setEtapa("");
        setAmount("");
        setDate("");
    }

    const chagePago = (event) => {
        setPago(event.target.value);
    }

    const chageEtapa = (event) => {
        setEtapa(event.target.value);
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


    return (
        <CardHeader>

            <form className="formulario" onSubmit={submitHandler}>

                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input className="input-date" type="Date" value={dateEntred} onChange={chageDate} min="2022-01-01" />
                    </div>
                    <div className="new-expense__control">
                        <label>Pago a</label>
                        <input className="input-pago" type="text" value={pagoEntred} onChange={chagePago} />
                    </div>
                    <div className="new-expense__control">
                        <label>Etapa N°</label>
                        <input className="input-etapa" type="text" value={etapaEntred} onChange={chageEtapa} />
                    </div>
                    <div className="new-expense__control">
                        <label>Costo</label>
                        <input className="input-amount" type="number" value={amountEntred} onChange={chageAmount} min="0.01" step="0.01" />
                    </div>

                    <div className="new-expense__actions">
                        <button className="btn btn-success btn-expense" type="submit">New Expense</button>
                        <button className="btn btn-danger btn-cancel" type="button" onClick={cancelkHandler}>Cancel</button>
                    </div>

                </div>

            </form>
        </CardHeader>
    );
}

export default NewExpenseMano;
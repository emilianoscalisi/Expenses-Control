import React from "react";
import "./Formulario.css";
import NewExpenseMat from "./NewExpenseMat";
import NewExpenseMano from "./NewExpenseMano";


const Formulario = (props) => {


    const calcelHandler = () => {
        props.onForm(false);
    }

    const saveDataHandler = (dataExpense) => {
        const newExpense = {
            id: Math.random().toLocaleString(),
            ...dataExpense
        }

        props.onSaveDataApp(newExpense);
    }

    const expenseSelected = props.item;

        if (expenseSelected === "Materiales") {
            return (
                <NewExpenseMat onCalcel={calcelHandler} onSaveData={saveDataHandler} />
            );
        } else {
            return (
                <NewExpenseMano onCalcel={calcelHandler} onSaveData={saveDataHandler} />
            );
        }
   
}
export default Formulario;
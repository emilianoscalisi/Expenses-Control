import React, { useState } from "react";
import "./Formulario.css";
import NewExpenseMat from "./NewExpenseMat";
import NewExpenseMano from "./NewExpenseMano";
import WhatItem from "./WhatItem";


const Formulario = (props) => {

    const [expenseSelected, setexpenseSelected] = useState();
    const [formState, setFormState] = useState(false);



    const itemSelectedHandler = (selected) => {
        setFormState(true);
        setexpenseSelected(selected);
    }

    const calcelHandler = () => {
        setFormState(false);
    }

    const saveDataHandler = (dataExpense) => {
        const newExpense = {
            id: Math.random().toLocaleString(),
            ...dataExpense
        }

        props.onSaveDataApp(newExpense);
    }

   

    if (formState) {
        if (expenseSelected === "Materiales") {
            return (
                <NewExpenseMat onCalcel={calcelHandler} onSaveData={saveDataHandler} />
            );
        } else {
            return (
                <NewExpenseMano onCalcel={calcelHandler} onSaveData={saveDataHandler} />
            );
        }
    } else {
            return (
                <WhatItem onItemSelected={itemSelectedHandler} />
            );
    }
}
    export default Formulario;
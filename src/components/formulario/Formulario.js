import React, { useState } from "react";
import "./Formulario.css";
import NewExpense from "./NewExpense";
import WhatItem from "./WhatItem";


const Formulario = (props) => {

    const [formState, setFormState] = useState(false);
    const [expenseSelected, setexpenseSelected] = useState();



    const itemSelectedHandler = (selected) => {
        setFormState(true);
        setexpenseSelected(selected);
    }

    const calcelHandler = () => {
        setFormState(false);
    }

    const saveDataHandler = (data) => {
        props.onSaveDataApp(data);
    }

    if (formState) {
        return (
            <NewExpense onCalcel={calcelHandler} selectedExpense={expenseSelected} onSaveData={saveDataHandler} />
        );
    } else {
        return (
            <WhatItem onItemSelected={itemSelectedHandler} />
        );
    }

}

export default Formulario;
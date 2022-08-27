import React, { useState } from "react";
import "./Formulario.css";
import NewExpense from "./NewExpense";
import WhatItem from "./WhatItem";


const Formulario = () => {

    const [formState, setFormState] = useState(false);
    const [expenseSelected, setexpenseSelected] = useState();


    
    const itemSelectedHandler =(selected)=>{
        setFormState (true);
        setexpenseSelected(selected);
    }

    const calcelHandler =()=>{
        setFormState (false);
    }
    
    

    if (formState) {
        return (
            <NewExpense onCalcel={calcelHandler} selectedExpense={expenseSelected}/>           
        );
    } else {
        return (
            <WhatItem onItemSelected={itemSelectedHandler}/>
        );
    }

}

export default Formulario;
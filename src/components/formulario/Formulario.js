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
    
    const date = new Date();
    const today = date.getDate();
    date.setDate(today);
    const defaultValue = date.toLocaleDateString('en-CA');
   

    const expenseSelected = props.item;  

        if (expenseSelected === "Materiales" || props.editItem.seccion === "Materiales" ) {
            return (
                <NewExpenseMat onCalcel={calcelHandler} onSaveData={saveDataHandler} defaultDate={defaultValue} itemToEdit={props.editItem} />
            );
        } else if (expenseSelected === "Mano de Obra" || props.editItem.seccion === "Mano de Obra" ){
            return (
                <NewExpenseMano onCalcel={calcelHandler} onSaveData={saveDataHandler} defaultDate={defaultValue} itemToEdit={props.editItem}/>
            );
        }
   
}
export default Formulario;
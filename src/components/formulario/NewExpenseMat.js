import React, { useState } from "react";
import "./NewExpense.css";
import CardHeader from "../cards/CardHeader";
import AttachFileIcon from '@mui/icons-material/AttachFile';

const NewExpenseMat = (props) => {

    const [proveedorEntred, setProveedor] = useState("");
    const [descripcionEntred, setDescripcion] = useState("");
    const [amountEntred, setAmount] = useState("");
    const [fileEntred, setFile] = useState("");
    const [dateEntred, setDate] = useState(props.defaultDate);

    if(props.itemToEdit.id !== "" ){

        console.log(props.itemToEdit.id);
        console.log(props.itemToEdit.seccion);
    // setProveedor(props.itemToEdit.proveedor);
    // setDescripcion(props.itemToEdit.descripcion);
    // setAmount(props.itemToEdit.amountPesos);
    // setFile("");
    // setDate(props.itemToEdit.date);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const localDate = new Date(dateEntred);
        const localDateFixed = new Date(localDate.getUTCFullYear(), localDate.getUTCMonth(), localDate.getUTCDate());
        const aEpoch = Math.floor(new Date(localDateFixed).getTime()/1000.0);

        const expenseDataMat = {
            seccion: "Materiales",
            proveedor: proveedorEntred,
            descripcion: descripcionEntred,
            amountPesos: Number.parseFloat(amountEntred),            
            file: fileEntred,
            date: aEpoch
        }
        props.onSaveData(expenseDataMat);
    
    setProveedor("");
    setDescripcion("");
    setAmount("");
    setFile("");
    setDate(props.defaultDate);
}

const chageProveedor = (event) => {
    setProveedor(event.target.value);
}

const chageDescripcion = (event) => {
    setDescripcion(event.target.value);
}

const chageAmount = (event) => {
    setAmount(event.target.value);
}

const chageDate = (event) => {
    setDate(event.target.value);
}

const chageFile = (event) => {
    setFile(event.target.value);   
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
                    <input className="input-date" type="Date" value={dateEntred} onChange={chageDate} min="2022-01-01" />
                </div>
                <div className="new-expense__control">                    
                    <input className="input-pago" placeholder="Proveedor" type="text" value={proveedorEntred} onChange={chageProveedor} />
                </div>
                <div className="new-expense__control">                    
                    <input className="input-descripcion" placeholder="Descripción" type="text" value={descripcionEntred} onChange={chageDescripcion} />
                </div>
                <div className="new-expense__control">                    
                    <input className="input-amount" placeholder="Costo" type="number" value={amountEntred} onChange={chageAmount} min="0.01" step="0.01" />
                </div>

                <div className="new-expense__control">
                    <label className="custom-file-upload">
                        <input type="file" hidden value={fileEntred} onChange={chageFile} />
                        <AttachFileIcon fontSize="large"></AttachFileIcon>                       
                    </label>
                </div>

                <div className="new-expense__actions">
                    <button className="btn btn-success btn-expense" type="submit">Agregar</button>
                    <button className="btn btn-danger btn-cancel" type="button" onClick={cancelkHandler}>Cancelar</button>
                </div>

            </div>

        </form>
    </CardHeader>
);
}

export default NewExpenseMat;
import React, { useState } from "react";
import "./NewExpense.css";
import CardHeader from "../cards/CardHeader";


const NewExpenseMano = (props) => {

    const [pagoEntred, setPago] = useState("");
    const [etapaEntred, setEtapa] = useState("");
    const [comentarioEntred, setComentario] = useState("");
    const [amountEntred, setAmount] = useState("");
    const [dateEntred, setDate] = useState(props.defaultDate)   
    const [btnState, setBtnState] = useState("Agregar")   

    // if(props.itemToEdit.id !== "" ){

    //     console.log(props.itemToEdit.id);
    //     console.log(props.itemToEdit.seccion);
    //     setPago(props.itemToEdit.pago);
    //     setEtapa(props.itemToEdit.etapa);
    //     setAmount(props.itemToEdit.amountPesos);
    //     setComentario(props.itemToEdit.comentario);
    //     setDate(props.itemToEdit.date);

    // }

    const editar =()=>{
        setBtnState("Editar");
        setPago(props.itemToEdit.pago);
        setEtapa(props.itemToEdit.etapa);
        setAmount(props.itemToEdit.amountPesos);
        setComentario(props.itemToEdit.comentario);
        setDate(props.itemToEdit.date);

    }

    const editarHandler =(event)=>{
        event.preventDefault();

        const localDate = new Date(dateEntred);
        const localDateFixed = new Date(localDate.getUTCFullYear(), localDate.getUTCMonth(), localDate.getUTCDate());
        const aEpoch = Math.floor(new Date(localDateFixed).getTime()/1000.0);

        const expenseDataMano = {
            seccion: "Mano de Obra",
            pago: pagoEntred,
            etapa: etapaEntred,
            comentario: comentarioEntred,
            amountPesos: Number.parseFloat(amountEntred),           
            date: aEpoch
        }
        props.onSaveDataEdited(expenseDataMano);     
    
        setPago("");
        setEtapa("");
        setAmount("");
        setComentario("");
        setDate(props.defaultDate);

    }

    const submitHandler = (event) => {
        event.preventDefault();

        const localDate = new Date(dateEntred);
        const localDateFixed = new Date(localDate.getUTCFullYear(), localDate.getUTCMonth(), localDate.getUTCDate());
        const aEpoch = Math.floor(new Date(localDateFixed).getTime()/1000.0);

        const expenseDataMano = {
            seccion: "Mano de Obra",
            pago: pagoEntred,
            etapa: etapaEntred,
            comentario: comentarioEntred,
            amountPesos: Number.parseFloat(amountEntred),           
            date: aEpoch
        }
        props.onSaveData(expenseDataMano);     
    
        setPago("");
        setEtapa("");
        setAmount("");
        setComentario("");
        setDate(props.defaultDate);
    }

    const chagePago = (event) => {
        setPago(event.target.value);
    }

    const chageEtapa = (event) => {
        setEtapa(event.target.value);
    }

    const chageComentario = (event) => {
        setComentario(event.target.value);
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
                        <input className="input-date" type="Date" value={dateEntred} onChange={chageDate} min="2022-01-01" />
                    </div>
                    <div className="new-expense__control">
                        <input className="input-pago" placeholder="Pago a" type="text" value={pagoEntred} onChange={chagePago} />
                    </div>
                    <div className="new-expense__control">                        
                        <input className="input-etapa" placeholder="Etapa N??" type="number" value={etapaEntred} onChange={chageEtapa} />
                    </div>
                    <div className="new-expense__control">                        
                        <input className="input-comentarios" placeholder="Comentarios" type="text" value={comentarioEntred} onChange={chageComentario} />
                    </div>
                    <div className="new-expense__control">                        
                        <input className="input-amount" placeholder="Costo" type="number" value={amountEntred} onChange={chageAmount} min="0.01" step="0.01" />
                    </div>

                    <div className="new-expense__actions">
                        <button className="btn btn-success btn-expense" type="submit" onClick={editarHandler} >{btnState}</button>
                        <button className="btn btn-danger btn-cancel" type="button" onClick={cancelkHandler}>Cancelar</button>
                    </div>

                </div>

            </form>
        </CardHeader>
    );
}

export default NewExpenseMano;
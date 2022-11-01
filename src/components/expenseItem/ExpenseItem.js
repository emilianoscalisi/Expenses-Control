
import React from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import CardHeader from "../cards/CardHeader";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function ExpenseItem(props){

    const deleteHandler =()=>{
        props.onDelete(props.data.id);      

    }
   
    if (props.data.seccion === "Mano de Obra"){
    return (
        <li>
        <CardHeader className="expense-item">
            <ExpenseDate date={props.data.date}/>
            <h2 className="expense-item__pago-prov">{props.data.pago}</h2>
            <h2 className="expense-item__etapa">{props.data.etapa}</h2>
            <h6 className="expense-item__comentario">{props.data.comentario}</h6>
            <div className="expense-item__price dolar">US$ {props.data.amountDolar.toLocaleString()}</div>                        
            <div className="expense-item__price">$ {props.data.amountPesos.toLocaleString()}</div>
            <button className="btn-icons" onClick={deleteHandler}>
                <DeleteForeverIcon fontSize="small"/>
            </button>
            <button className="btn-icons">
                <EditIcon fontSize="small"/>
            </button>                      
        </CardHeader>
    </li>
    );

    }else {
        return(
        <li>
        <CardHeader className="expense-item">
            <ExpenseDate date={props.data.date}/>
            <h2 className="expense-item__pago-prov">{props.data.proveedor}</h2>
            <h2 className="expense-item__descripcion">{props.data.descripcion}</h2>
            <h6 className="expense-item__file">{props.data.file}</h6>
            <div className="expense-item__price dolar">US$ {props.data.amountDolar.toLocaleString()}</div>               
            <div className="expense-item__price">$ {props.data.amountPesos.toLocaleString()}</div>
            <button className="btn-icons" onClick={deleteHandler}>
                <DeleteForeverIcon fontSize="small"/>
            </button>
            <button className="btn-icons">
                <EditIcon fontSize="small"/>
            </button>                       
        </CardHeader>
    </li>

        );
    }

    
}

export default ExpenseItem;
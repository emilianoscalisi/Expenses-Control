
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import CardHeader from "../cards/CardHeader";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function ExpenseItem(props){
   
    if (props.data.seccion === "Mano de Obra"){
    return (
        <li>
        <CardHeader className="expense-item">
            <ExpenseDate date={props.data.date}/>
            <h2 className="expense-item__description">{props.data.pago}</h2>
            <h2 className="expense-item__description">{props.data.etapa}</h2>
            <h6 className="expense-item__description">{props.data.comentario}</h6>
            <div className="expense-item__price dolar">US$ {props.data.amountDolar.toLocaleString()}</div>               
            <div className="expense-item__price">$ {props.data.amountPesos.toLocaleString()}</div>
            <button className="btn-icons">
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
            <h2 className="expense-item__description">{props.data.proveedor}</h2>
            <h2 className="expense-item__description">{props.data.descripcion}</h2>
            <h6 className="expense-item__description">{props.data.file}</h6>
            <div className="expense-item__price dolar">US$ {props.data.amountDolar.toLocaleString()}</div>               
            <div className="expense-item__price">$ {props.data.amountPesos.toLocaleString()}</div>
            <button className="btn-icons">
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
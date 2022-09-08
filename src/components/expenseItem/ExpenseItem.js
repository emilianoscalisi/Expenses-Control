
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "./Card";

function ExpenseItem(props){
   
    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <h2 className="expense-item__description">{props.pago}</h2>
            <h2 className="expense-item__description">{props.etapa}</h2>
            <div className="expense-item__price">$ {props.amount}</div>                     
        </Card>
    </li>

    );
}

export default ExpenseItem;
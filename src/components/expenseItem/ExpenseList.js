
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import EncabezadoMano from "../encabezado/EncabezadoMano";
import EncabezadoMat from "../encabezado/EncabezadoMat";

const ExpenseList = (props) => {


    if (props.data.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Foud</h2>

    }

    const expenses = props.data;
    const seccionSelected = props.seccion;

    const expensesFiltredBySection = expenses.filter(eachExpense =>eachExpense.seccion === seccionSelected);

    return (

        <div>
            {seccionSelected === "Materiales" ? <EncabezadoMat/> : <EncabezadoMano/>}           
           
            <ul className="expenses-list" >
                {expensesFiltredBySection.map((expe) => (<ExpenseItem
                    key={expe.id}
                    data={expe}
                />))}

            </ul>
        </div>
    );

}

export default ExpenseList;
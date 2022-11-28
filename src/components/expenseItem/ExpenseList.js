
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import EncabezadoMano from "../encabezado/EncabezadoMano";
import EncabezadoMat from "../encabezado/EncabezadoMat";

const ExpenseList = (props) => {


    if (props.data.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Foud</h2>

    }

    const deleteHandler =(ItemToRemov)=>{        
        props.OnRemoveItem(ItemToRemov);

    }

    const expenses = props.data;
    const seccionSelected = props.seccion;

    

    return (

        <div>
            {seccionSelected === "Materiales" ? <EncabezadoMat/> : <EncabezadoMano/>}           
           
            <ul className="expenses-list" >
                {expenses.map((expe) => (<ExpenseItem
                    key={expe.id}
                    data={expe}
                    onDelete ={deleteHandler}
                />))}

            </ul>
        </div>
    );

}

export default ExpenseList;
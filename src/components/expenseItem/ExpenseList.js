
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import EncabezadoMano from "../encabezado/EncabezadoMano";
import EncabezadoMat from "../encabezado/EncabezadoMat";

const ExpenseList = (props) => {


    if (props.data.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses Foud</h2>

    }

    const seccionSelected = props.seccion;    

    return (

        <div>
            {seccionSelected === "materiales" ? <EncabezadoMat/> : <EncabezadoMano/>}           
           
            <ul className="expenses-list" >
                {props.data.map((expe) => (<ExpenseItem
                    key={expe.id}
                    data={expe}
                />))}

            </ul>
        </div>
    );

}

export default ExpenseList;

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"

const ExpenseList = (prop) =>{


    if (prop.data.length === 0){
        return <h2 className="expenses-list__fallback">No Expenses Foud</h2>

    }

    return (

    <ul className="expenses-list" >
        
               { prop.data.map((expe) => (<ExpenseItem
                key = {expe.id}
                date={expe.date}
                pago={expe.pago}
                etapa={expe.etapa}
                amount={expe.amount}
              />)) }   

    </ul>
    );
   
}

export default ExpenseList;
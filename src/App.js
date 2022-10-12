import './App.css';
import Header from './components/header/Header';
import Formulario from './components/formulario/Formulario';
import dolar from './APIs/dolarHoy';

import { useState } from 'react';
import ExpenseList from './components/expenseItem/ExpenseList';

const DUMMIE_EXPENSES_DATA = [
  {
    id: 1,
    seccion: "Materiales",
    proveedor: "Codimat",
    descripcion: "Cemento y cal",
    file: "---------",
    amountPesos: 15000,
    amountDolar: 1500,
    date: new Date(2022,8,31)
  },
  {
    id: 2,
    seccion: "Mano de Obra",
    pago: "Julio",
    etapa: "1",
    comentario: "Revoques y contrapiso",
    amountPesos: 40000,
    amountDolar: 400,
    date: new Date(2022,8,31)
  },
  {
    id: 3,
    seccion: "Materiales",
    proveedor: "Gili",
    descripcion: "Ladrillos",
    file: "---------",
    amountPesos: 60000,
    amountDolar: 600,
    date: new Date(2022,8,31)
  },
  {
    id: 4,
    seccion: "Mano de Obra",
    pago: "Pedro",
    etapa: "4",
    comentario: "Direccion de obra",    
    amountPesos: 50000,
    amountDolar: 500,
    date: new Date(2022,8,31)
  }
]

function App() {
  
  const [expenses, setExpenses]=useState(DUMMIE_EXPENSES_DATA);
  const [itemSelected, setItemSelected]=useState();
  const [seccionSelected, setSeccion]=useState("Materiales");
  const [formState, setFormState] = useState(false); 
  
  
  const expensesFiltredBySection = expenses.filter(eachExpense =>eachExpense.seccion === seccionSelected);
  
  const saveDataHandler = (newExpenseData) => {    
    setExpenses ( (prevExpenses) => {     
      return [newExpenseData, ...prevExpenses];
    });
  }
  
  const removeItemHandler=(id)=>{
    setExpenses ( (prevExpenses) => {
     return prevExpenses.filter((expensesItem)=>expensesItem.id !== id);      
    });    
  }
  
  const totalesManoyMat = {
    totalPesos: expenses.reduce((acumulador, actual) => actual.amountPesos + acumulador, 0).toLocaleString(),
    totalDolar: expenses.reduce((acumulador, actual) => actual.amountDolar + acumulador, 0).toLocaleString()
  }

  const selectedHandler=(whatItem)=>{
    setItemSelected(whatItem);
    setFormState(true);
  }

  const seccionHandler=(seccion)=>{
    setSeccion(seccion);    

  }

  const formHandler=(stateForm) => {
    setFormState(false);
  }


  dolar();

  return (
    <div>
      <Header 
      onSelected={selectedHandler} 
      onSeccion={seccionHandler} 
      totales={totalesManoyMat}
      data={expensesFiltredBySection}/>
      {formState === true && <Formulario onForm={formHandler} onSaveDataApp={saveDataHandler} item={itemSelected}/>}
      <ExpenseList 
      data={expensesFiltredBySection} 
      seccion={seccionSelected}
      OnRemoveItem={removeItemHandler}/>
    </div>

  );
}

export default App;

import './App.css';
import Header from './components/header/Header';
import Formulario from './components/formulario/Formulario';

import { useState } from 'react';
import ExpenseList from './components/expenseItem/ExpenseList';

const DUMMIE_EXPENSES_DATA = [
  {
    id: 1,
    seccion: "Materiales",
    proveedor: "Codimat",
    descripcion: "Cemento y cal",
    amount: 15000,
    date: new Date(2022,8,31)
  },
  {
    id: 2,
    seccion: "Mano de Obra",
    pago: "Julio",
    etapa: "1",
    amount: 40000,
    date: new Date(2022,8,31)
  }
]

function App() {

  const [expenses, setExpenses]=useState(DUMMIE_EXPENSES_DATA);
  const [itemSelected, setItemSelected]=useState();

  const saveDataHandler = (newExpenseData) => {
    
    setExpenses ( (prevExpenses) => {
      console.log([newExpenseData, ...prevExpenses]);
      return [newExpenseData, ...prevExpenses];
    });

  }

  const selectedHandler=(whatItem)=>{
    setItemSelected(whatItem);

  }



  return (
    <div>
      <Header onSelected={selectedHandler}></Header>
      <Formulario onSaveDataApp={saveDataHandler} item={itemSelected}></Formulario>
      <ExpenseList data = {expenses}/>
    </div>

  );
}

export default App;

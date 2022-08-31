import './App.css';
import Header from './components/header/Header';
import Formulario from './components/formulario/Formulario';
import { useState } from 'react';

const DUMMIE_EXPENSES_DATA = [
  {
    id: 1,
    seccion: "Materiales",
    pagoProv: "Codimat",
    etapDescr: "Cemento y cal",
    amount: 15000,
    date: new Date(2022,8,31)
  },
  {
    id: 2,
    seccion: "Mano de Obra",
    pagoProv: "Julio",
    etapDescr: "1",
    amount: 40000,
    date: new Date(2022,8,31)
  }
]

function App() {

  const [expenses, setExpenses]=useState(DUMMIE_EXPENSES_DATA);

  const saveDataHandler = (newExpenseData) => {
    
    setExpenses ( (prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });

    console.log(expenses);
  }



  return (
    <div>
      <Header></Header>
      <Formulario onSaveDataApp={saveDataHandler}></Formulario>

    </div>

  );
}

export default App;

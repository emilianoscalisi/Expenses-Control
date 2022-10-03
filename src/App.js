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
    file: "---------",
    amount: 15000,
    date: new Date(2022,8,31)
  },
  {
    id: 2,
    seccion: "Mano de Obra",
    pago: "Julio",
    etapa: "1",
    comentario: "Revoques y contrapiso",
    amount: 40000,
    date: new Date(2022,8,31)
  },
  {
    id: 3,
    seccion: "Materiales",
    proveedor: "Gili",
    descripcion: "Ladrillos",
    file: "---------",
    amount: 60000,
    date: new Date(2022,8,31)
  },
  {
    id: 4,
    seccion: "Mano de Obra",
    pago: "Pedro",
    etapa: "4",
    comentario: "Direccion de obra",
    amount: 50000,
    date: new Date(2022,8,31)
  }
]

function App() {

  const [expenses, setExpenses]=useState(DUMMIE_EXPENSES_DATA);
  const [itemSelected, setItemSelected]=useState();
  const [seccionSelected, setSeccion]=useState("Materiales");
  const [formState, setFormState] = useState(false);


  const saveDataHandler = (newExpenseData) => {    
    setExpenses ( (prevExpenses) => {
      console.log([newExpenseData, ...prevExpenses]);
      return [newExpenseData, ...prevExpenses];
    });
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



  return (
    <div>
      <Header onSelected={selectedHandler} onSeccion={seccionHandler}></Header>     
      {formState === true && <Formulario onForm={formHandler} onSaveDataApp={saveDataHandler} item={itemSelected}></Formulario>}
      <ExpenseList data={expenses} seccion={seccionSelected}/>
    </div>

  );
}

export default App;

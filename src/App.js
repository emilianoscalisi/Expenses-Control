import './App.css';
import Header from './components/header/Header';
import Formulario from './components/formulario/Formulario';
import { useEffect, useState } from 'react';
import ExpenseList from './components/expenseItem/ExpenseList';
import { collection, getDocs,doc, setDoc, query, orderBy, deleteDoc} from "firebase/firestore";
import db from './firebase/firebaseConfig';

const DUMMIE_EXPENSES_DATA = [
  {
    id: 1,
    seccion: "Materiales",
    proveedor: "Codimat",
    descripcion: "Cemento y cal",
    file: "---------",
    amountPesos: 15000,
    valorDolar: 200,
    amountDolar: 15000 / 200,
    date: 1666926000
  },
  {
    id: 2,
    seccion: "Mano de Obra",
    pago: "Julio",
    etapa: "1",
    comentario: "Revoques y contrapiso",
    amountPesos: 40000,
    valorDolar: 200,
    amountDolar: 40000 / 200,
    date: 1666926000
  },
  {
    id: 3,
    seccion: "Materiales",
    proveedor: "Gili",
    descripcion: "Ladrillos",
    file: "---------",
    amountPesos: 60000,
    valorDolar: 200,
    amountDolar: 60000 / 200,
    date: 1666926000
  },
  {
    id: 4,
    seccion: "Mano de Obra",
    pago: "Pedro",
    etapa: "4",
    comentario: "Direccion de obra",
    amountPesos: 50000,
    valorDolar: 200,
    amountDolar: 50000 / 200,
    date: 1666926000
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMMIE_EXPENSES_DATA);
  const [itemSelected, setItemSelected] = useState();
  const [seccionSelected, setSeccion] = useState("Materiales");
  const [formState, setFormState] = useState(false);


  const expensesFiltredBySection = expenses.filter(eachExpense => eachExpense.seccion === seccionSelected);

  const saveDataHandler = (newExpenseData) => {
    let theExpense = {
      ...newExpenseData,
      valorDolar: dolarHoy,
      amountDolar: newExpenseData.amountPesos / (dolarHoy * 1.75)
    };

    setExpenses((prevExpenses) => {

      return [
        theExpense,
        ...prevExpenses];
    });
    escribirDatos(theExpense);
  }

   const removeItemHandler = async (ItemToRemov) => {

    //Borro Items de firebase
    await deleteDoc(doc(db, ItemToRemov.seccion, ItemToRemov.id));

    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expensesItem) => expensesItem.id !== ItemToRemov.id);
    });
  }

  const totalesManoyMat = {
    totalPesos: expenses.reduce((acumulador, actual) => actual.amountPesos + acumulador, 0).toLocaleString(),
    totalDolar: expenses.reduce((acumulador, actual) => actual.amountDolar + acumulador, 0).toLocaleString()
  }

  const selectedHandler = (whatItem) => {
    setItemSelected(whatItem);
    setFormState(true);
  }

  const seccionHandler = (seccion) => {
    setSeccion(seccion);

  }

  const formHandler = (stateForm) => {
    setFormState(false);
  }

  //ver por que se ejecuta 2 veces con cada click en header app-------------------------------------

  let dolarHoy;
  const getValorDolar = (valorDolar) => {
    dolarHoy = valorDolar;
    console.log(dolarHoy);
  }

  //Base de datos---------Leer
  const obtenerDatos = async () => {

    const q = query(collection(db, "Mano de Obra"), orderBy("date", "asc"));
    const r = query(collection(db, "Materiales"), orderBy("date", "asc"));

    const querySnapshotMano = await getDocs(q);
    const querySnapshotMat = await getDocs(r);
    
    let mano = [];
    let mat = [];
    querySnapshotMano.forEach((doc) => {

      const dataFromFireMano = doc.data();
      mano.push({
        ...dataFromFireMano
      });      
    });

    querySnapshotMat.forEach((doc) => {

      const dataFromFireMat = doc.data();
      mat.push({
        ...dataFromFireMat
      });
      const manoYmat = [...mano, ...mat];
      setExpenses(manoYmat);

    });
  }

  useEffect(() => {
    obtenerDatos();
  }, []);



  //Base de datos---------Escribir
  const escribirDatos = async (expenses) => {

    const seccion = expenses.seccion;
    var expensaAdd;

    if (seccion === "Mano de Obra") {
      expensaAdd = {
        id: expenses.id,
        seccion: expenses.seccion,
        pago: expenses.pago,
        etapa: expenses.etapa,
        comentario: expenses.comentario,
        amountPesos: expenses.amountPesos,
        valorDolar: expenses.valorDolar,
        amountDolar: expenses.amountDolar,
        date: expenses.date
      }
    } else {
      expensaAdd = {
        id: expenses.id,
        seccion: expenses.seccion,
        proveedor: expenses.proveedor,
        descripcion: expenses.descripcion,
        file: "---------",
        amountPesos: expenses.amountPesos,
        valorDolar: expenses.valorDolar,
        amountDolar: expenses.amountDolar,
        date: expenses.date
      }
    }

    
    try {
      // Cargo la expensa con el ID del item
      await setDoc(doc(db, seccion, expensaAdd.id), expensaAdd);

      // Cargo la expensa con el ID generado automaticamente
      // const docRef = await addDoc(collection(db, seccion),
      //   expensaAdd
      // );
      console.log("Document written with ID: ", expensaAdd.id);
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <Header
        onValorDolar={getValorDolar}
        onSelected={selectedHandler}
        onSeccion={seccionHandler}
        totales={totalesManoyMat}
        data={expensesFiltredBySection}
        item={itemSelected}/>        
      {formState === true && <Formulario onForm={formHandler} onSaveDataApp={saveDataHandler} item={itemSelected} />}
      <ExpenseList
        data={expensesFiltredBySection}
        seccion={seccionSelected}
        OnRemoveItem={removeItemHandler} />
    </div>

  );
}

export default App;

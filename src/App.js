import './App.css';
import Header from './components/header/Header';
import Formulario from './components/formulario/Formulario';


function App() {

  const saveDataHandler = (data) => {
    console.log(data);
  }

  return (
    <div>
      <Header></Header>
      <Formulario onSaveDataApp={saveDataHandler}></Formulario>

    </div>

  );
}

export default App;

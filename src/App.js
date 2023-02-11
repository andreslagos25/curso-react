import logo from './logo.svg';
import './App.css';
// import MiComponenteConContexto from './components/hooks/Ejemplo3';
// import Ejemplo4 from './components/hooks/Ejemplo4';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import ConctactList from './components/container/conctact_list';
// import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
//import Greeting from './components/pure/greeting';
//import Greetingf from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/** Componente propio Greeting */}
        {/*<Greeting name = {"Andres"}></Greeting>*/}
        {/*<Greetingf name={"Andres"}></Greetingf>*/}
        {/** Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ConctactList></ConctactList> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre= "Martin">
         Todo lo que hay aquí, es tratado como props.children
          <h3>
            Contenido del prop.children
          </h3>
        </Ejemplo4> */}
        <GreetingStyled name="Andres"></GreetingStyled>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ConctactList from './container/conctact_list';
//import TaskListComponent from './container/task_list';
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
        {/*<TaskListComponent></TaskListComponent>*/}
        <ConctactList></ConctactList>
      </header>
    </div>
  );
}

export default App;

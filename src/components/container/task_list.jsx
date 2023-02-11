import React from 'react';
import { LEVELS } from '../models/levels.enum';
//import PropTypes from 'prop-types';
import { Task } from '../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'

const TaskListComponent = () => {

    

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    //Estado del componente

    //Control del ciclo de vida
    
    // const [tasks, setTasks] = useState([defaultTask]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     console.log('Task state has been modified')
    //     setLoading(false);
    //     return () => {
    //         console.log('Task list component is going to dismount')
    //     };
    // }, [tasks]);
    // const changeCompleted = (id) =>{
    //     console.log("TO DO: Cambiar el estado de una tarea");
    // }

    return (
        <div>
            <div>
                <h1>
                    Your task:
                </h1>
            </div>
            {/* TO DO Aplicar un for o un map para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;

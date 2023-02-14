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
            <div className='col-12'>
                <div className='card'>
                {/* Card header (title) */}
                    <div className='card-header p-3'>
                        <h5>Your tasks:</h5>
                    </div>
                    {/* Card body (contenet) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* TODO: iterar sobre una lista de tareas */}
                            <TaskComponent task={defaultTask}></TaskComponent>
                        </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
            {/* TO DO Aplicar un for o un map para renderizar una lista de tareas */}
            
        </div>
    );
};




export default TaskListComponent;

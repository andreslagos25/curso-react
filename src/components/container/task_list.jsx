import React, { useEffect, useState } from 'react';
import { LEVELS } from '../models/levels.enum';
//import PropTypes from 'prop-types';
import { Task } from '../models/task.class';
import TaskComponent from '../../pure/task';


const TaskListComponent = () => {

    

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    //Estado del componente

    //Control del ciclo de vida
    
    const [tasks, setTasks] = useState([defaultTask]);
    useEffect(() => {
        console.log('Task state has been modified')
        return () => {
            console.log('Task list component is going to dismount')
        };
    }, [tasks]);
    const changeCompleted = (id) =>{
        console.log("TO DO: Cambiar el estado de una tarea");
    }

    return (
        <div>
            <div>
                Your Task: 
            </div>
            {/* TO DO Aplicar un for o un map para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;

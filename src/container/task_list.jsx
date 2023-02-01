import React from 'react';
import { LEVELS } from '../models/levels.enum';
//import PropTypes from 'prop-types';
import { Task } from '../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    /*const changeState = (id) =>{
        console.log("TO DO: Cambiar el estado de una tarea");
    }*/

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

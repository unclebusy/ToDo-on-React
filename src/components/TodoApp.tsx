import styles from './TodoApp.module.scss';
import * as React from 'react';
import { useState } from 'react';
import { FilterTask, Task } from '../types';
import TodoInputField from './TodoInputField';
import TodosList from './TodosList';
import TodoButtons from './TodoButtons.tsx';

const TodoApp: React.FC = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [filterTask, setFilterTask] = useState<FilterTask>('all');

  return (
    <div className={styles.wrapperApp}>
      <h1>Todos</h1>
      <TodoInputField setTasksList={setTasksList} />
      <TodosList tasksList={tasksList} setTasksList={setTasksList} filterTask={filterTask} />
      <TodoButtons
        tasksList={tasksList}
        setTasksList={setTasksList}
        setFilterTask={setFilterTask}
      />
    </div>
  );
};

export default TodoApp;

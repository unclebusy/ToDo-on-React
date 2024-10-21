import styles from './TodoButtons.module.scss';
import * as React from 'react';
import { FilterTask, TodoButtonsProps } from '../types';
import { Button } from '@mui/material';

const TodoButtons: React.FC<TodoButtonsProps> = ({ tasksList, setTasksList, setFilterTask }) => {
  const tasksLeft = tasksList.length;

  const handleChangeFilterTask = (type: FilterTask) => {
    setFilterTask(type);
  };

  const handleClearCompletedTasks = () => {
    setTasksList(tasksList.filter((task) => !task.isCompleted));
  };

  return (
    <div className={styles.wrapperButtons}>
      <span>{tasksLeft} tasks left</span>
      <div className={styles.wrapperButtonsTasksStatus}>
        <Button variant="contained" type="button" onClick={() => handleChangeFilterTask('all')}>
          All
        </Button>
        <Button variant="contained" type="button" onClick={() => handleChangeFilterTask('active')}>
          Active
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={() => handleChangeFilterTask('completed')}
        >
          Completed
        </Button>

        <Button
          variant="contained"
          color="success"
          type="button"
          onClick={handleClearCompletedTasks}
        >
          Clear completed
        </Button>
      </div>
    </div>
  );
};

export default TodoButtons;

import styles from './TodoButtons.module.scss';
import * as React from 'react';
import { FilterTask, TodoButtonsProps } from '../types';

const TodoButtons: React.FC<TodoButtonsProps> = ({ tasksList, setTasksList, setFilterTask }) => {
  const tasksLeft = tasksList.length;

  const handleChangeFilterTask = (type: FilterTask) => {
    setFilterTask(type);
  };

  const handleClearCompletedTasks = () => {
    setTasksList(tasksList.filter((task) => !task.isCompleted));
  };

  return (
    <div className={styles.wrapperButtonsField}>
      <span>{tasksLeft} tasks left</span>
      <div className={styles.wrapperButtonsTasksStatus}>
        <button type="button" onClick={() => handleChangeFilterTask('all')}>
          All
        </button>
        <button type="button" onClick={() => handleChangeFilterTask('active')}>
          Active
        </button>
        <button type="button" onClick={() => handleChangeFilterTask('completed')}>
          Completed
        </button>
        <button type="button" onClick={handleClearCompletedTasks}>
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default TodoButtons;

import styles from './TodoInputField.module.scss';
import * as React from 'react';
import { useState } from 'react';
import { Task, TodoInputFieldProps } from '../types';

const TodoInputField: React.FC<Pick<TodoInputFieldProps, 'setTasksList'>> = ({ setTasksList }) => {
  const [currentTask, setCurrentTask] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const handleAddTask = () => {
    if (currentTask.trim() !== '') {
      const getTaskId = new Date().getTime().toString();

      const newTask: Task = {
        id: getTaskId,
        taskName: currentTask,
        isCompleted: false,
      };
      setTasksList((prevState) => [...prevState, newTask]);
      setCurrentTask('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className={styles.wrapperInputField}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={currentTask}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default TodoInputField;
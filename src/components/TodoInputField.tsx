import styles from './TodoInputField.module.scss';
import * as React from 'react';
import { useState } from 'react';
import { Task, TodoInputFieldProps } from '../types';
import { Button, TextField } from '@mui/material';

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
      <TextField
        className={styles.inputField}
        id="outlined-basic"
        type="search"
        label="What needs to be done?"
        variant="outlined"
        value={currentTask}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button type="submit" variant="contained" onClick={handleAddTask}>
        Add
      </Button>
    </div>
  );
};

export default TodoInputField;

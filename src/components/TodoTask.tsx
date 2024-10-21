import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import styles from './TodoTask.module.scss';

interface TodoTaskProps {
  taskName: string;
  isCompleted: boolean;
  onToggle: () => void;
}

const TodoTask: React.FC<TodoTaskProps> = ({ taskName, isCompleted, onToggle }) => {
  return (
    <li className={styles.elem}>
      <Checkbox color="success" checked={isCompleted} onChange={onToggle} />
      {taskName}
    </li>
  );
};

export default TodoTask;

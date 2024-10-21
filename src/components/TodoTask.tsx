import * as React from 'react';

interface TodoTaskProps {
  taskName: string;
  isCompleted: boolean;
  onToggle: () => void;
}

const TodoTask: React.FC<TodoTaskProps> = ({ taskName, isCompleted, onToggle }) => {
  return (
    <li>
      <input type="checkbox" checked={isCompleted} onChange={onToggle} />
      {taskName}
    </li>
  );
};

export default TodoTask;

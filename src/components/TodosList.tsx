import styles from './TodoList.module.scss';
import * as React from 'react';
import { TodoListProps } from '../types';
import TodoTask from './TodoTask';

const TodosList: React.FC<TodoListProps> = ({ tasksList, setTasksList, filterTask }) => {
  const handleToggle = (taskId: string) => {
    setTasksList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              isCompleted: !task.isCompleted,
            }
          : task
      )
    );
  };

  const filteredTasks = tasksList.filter((task) => {
    if (filterTask === 'active') return !task.isCompleted;
    if (filterTask === 'completed') return task.isCompleted;
    return true;
  });

  return (
    <div className={styles.wrapperList}>
      <ul>
        {filteredTasks.map((task) => (
          <TodoTask
            key={task.id}
            taskName={task.taskName}
            isCompleted={task.isCompleted}
            onToggle={() => handleToggle(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;

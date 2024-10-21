import { Dispatch, SetStateAction } from 'react';

export type FilterTask = 'all' | 'active' | 'completed';

export interface Task {
  id: string;
  taskName: string;
  isCompleted: boolean;
}

export interface TodoInputFieldProps {
  setTasksList: Dispatch<SetStateAction<Task[]>>;
}

export interface TodoListProps {
  tasksList: Task[];
  setTasksList: Dispatch<SetStateAction<Task[]>>;
  filterTask: FilterTask;
}

export interface TodoButtonsProps {
  tasksList: Task[];
  setTasksList: Dispatch<SetStateAction<Task[]>>;
  setFilterTask: Dispatch<SetStateAction<FilterTask>>;
}

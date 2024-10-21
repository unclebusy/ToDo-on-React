import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoButtons from '../TodoButtons.tsx';

describe('TodoButtons', () => {
  test('renders buttons and clears completed tasks', () => {
    const setFilterTask = jest.fn();
    const setTasksList = jest.fn();
    const tasksList = [{ id: '1', taskName: 'Test Task', isCompleted: true }];

    render(
      <TodoButtons
        tasksList={tasksList}
        setTasksList={setTasksList}
        setFilterTask={setFilterTask}
      />
    );

    expect(screen.getByText(/1 tasks left/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/clear completed/i));
    expect(setTasksList).toHaveBeenCalledWith([]);
  });
});

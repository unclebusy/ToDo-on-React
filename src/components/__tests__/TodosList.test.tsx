// @ts-nocheck
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TodosList from '../TodosList.tsx';

describe('TodosList', () => {
  test('renders tasks', () => {
    const tasksList = [
      { id: '1', taskName: 'Test Task 1', isCompleted: false },
      { id: '2', taskName: 'Test Task 2', isCompleted: true },
    ];
    const setTasksList = jest.fn();
    render(<TodosList tasksList={tasksList} setTasksList={setTasksList} filterTask="all" />);

    expect(screen.getByText(/test task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/test task 2/i)).toBeInTheDocument();
  });
});

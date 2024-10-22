// @ts-nocheck
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoTask from '../TodoTask.tsx';

describe('TodoTask', () => {
  test('renders task and toggles completion', () => {
    const onToggle = jest.fn();

    const { rerender } = render(
      <TodoTask taskName="Sample Task" isCompleted={false} onToggle={onToggle} />
    );

    const checkbox = screen.getByRole('checkbox');
    const taskText = screen.getByText(/sample task/i);

    expect(taskText).toBeInTheDocument();
    expect(taskText).not.toHaveClass('completed');

    fireEvent.click(checkbox);
    expect(onToggle).toHaveBeenCalledTimes(1);

    rerender(<TodoTask taskName="Sample Task" isCompleted={true} onToggle={onToggle} />);

    expect(checkbox).toBeChecked();
    expect(taskText).toHaveClass('completed');
  });
});

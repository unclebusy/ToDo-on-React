// @ts-nocheck
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoTask from '../TodoTask.tsx';

describe('TodoTask', () => {
  test('renders task and toggles completion', () => {
    const onToggle = jest.fn();
    render(<TodoTask taskName="Sample Task" isCompleted={false} onToggle={onToggle} />);

    const checkbox = screen.getByRole('checkbox');
    expect(screen.getByText(/sample task/i)).toBeInTheDocument();

    fireEvent.click(checkbox);
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});

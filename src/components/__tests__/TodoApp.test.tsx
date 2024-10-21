// @ts-nocheck
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from '../TodoApp.tsx';

describe('TodoApp', () => {
  test('renders title', () => {
    render(<TodoApp />);
    const titleElement = screen.getByText(/todos/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('adds a new task', () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText(/what needs to be done?/i);
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(screen.getByText(/add/i));

    expect(screen.getByText(/new task/i)).toBeInTheDocument();
  });
});

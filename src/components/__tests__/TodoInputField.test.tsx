import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoInputField from '../TodoInputField.tsx';

describe('TodoInputField', () => {
  test('renders input field and button', () => {
    const setTasksList = jest.fn();
    render(<TodoInputField setTasksList={setTasksList} />);

    const inputElement = screen.getByPlaceholderText(/what needs to be done?/i);
    expect(inputElement).toBeInTheDocument();
    expect(screen.getByText(/add/i)).toBeInTheDocument();
  });

  test('adds task on button click', () => {
    const setTasksList = jest.fn();
    render(<TodoInputField setTasksList={setTasksList} />);

    const inputElement = screen.getByPlaceholderText(/what needs to be done?/i);
    fireEvent.change(inputElement, { target: { value: 'Test Task' } });
    fireEvent.click(screen.getByText(/add/i));

    expect(setTasksList).toHaveBeenCalledTimes(1);
  });

  test('adds task on Enter key press', () => {
    const setTasksList = jest.fn();
    render(<TodoInputField setTasksList={setTasksList} />);

    const inputElement = screen.getByPlaceholderText(/what needs to be done?/i);
    fireEvent.change(inputElement, { target: { value: 'Test Task' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(setTasksList).toHaveBeenCalledTimes(1);
  });
});

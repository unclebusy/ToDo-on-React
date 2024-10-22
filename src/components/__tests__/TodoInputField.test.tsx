// @ts-nocheck
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoInputField from '../TodoInputField.tsx';

describe('TodoInputField', () => {
  let setTasksList: jest.Mock;

  beforeEach(() => {
    setTasksList = jest.fn();
    render(<TodoInputField setTasksList={setTasksList} />);
  });

  test('renders input field and button', () => {
    const inputElement = screen.getByLabelText(/what needs to be done?/i);
    const buttonElement = screen.getByText(/add/i);

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('adds task on button click', () => {
    const inputElement = screen.getByLabelText(/what needs to be done?/i);

    fireEvent.change(inputElement, { target: { value: 'Test Task' } });
    fireEvent.click(screen.getByText(/add/i));

    expect(setTasksList).toHaveBeenCalledTimes(1);
    expect(setTasksList).toHaveBeenCalledWith(expect.any(Function));
  });

  test('adds task on Enter key press', () => {
    const inputElement = screen.getByLabelText(/what needs to be done?/i);

    fireEvent.change(inputElement, { target: { value: 'Test Task' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(setTasksList).toHaveBeenCalledTimes(1);
    expect(setTasksList).toHaveBeenCalledWith(expect.any(Function));
  });
});

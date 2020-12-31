import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Uuid4 from './uuid4';

const uuidPattern = '([a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}\n?)';

test('generates UUIDs', () => {
    render(<Uuid4 setError={jest.fn()} clearError={jest.fn()} />);
    const buttonElement = screen.getByText(/Generate UUIDs/);
    expect(buttonElement).toBeInTheDocument();
    const inputElement = screen.getByTestId(/inputTestId/);
    expect(inputElement).toBeInTheDocument();
    const textareaElement = screen.getByTestId(/textareadTestId/);
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement.innerHTML).toMatch(new RegExp(uuidPattern + '{25,25}'));
    fireEvent.change(inputElement, { target: { value: '50' } });
    buttonElement.click();
    expect(textareaElement.innerHTML).toMatch(new RegExp(uuidPattern + '{50,50}'));
});

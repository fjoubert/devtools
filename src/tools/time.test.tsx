import React from 'react';
import { render, screen } from '@testing-library/react';
import Time from './time';

describe('Time', () => {

    beforeEach(() => {
        render(<Time setError={jest.fn()} clearError={jest.fn()} />);
    });

    // TODO add more tests for the Time tool!
    test('renders', () => {
        const btnElement = screen.getByText(/Now/);
        expect(btnElement).toBeInTheDocument();
    });
});
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Base64 from './base64';

const testString = " !\"#$%'()*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`上海+中國";
const encodedTestString = "ICEiIyQlJygpKissLS4vMDEyMzQ1Njc4OTo7PT9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXF1eX2DkuIrmtbcr5Lit5ZyL";

describe('Base64', () => {
    let textareaElement: HTMLElement;

    beforeEach(() => {
        render(<Base64 setError={jest.fn()} clearError={jest.fn()} />);
        textareaElement = screen.getByTestId(/textareadTestId/);
    });

    test('encodes Base64', () => {
        const btnElement = screen.getByText(/Base64 Encode/);
        expect(btnElement).toBeInTheDocument();
        fireEvent.change(textareaElement, { target: { value: testString } });
        btnElement.click();
        expect(textareaElement.innerHTML).toBe(encodedTestString);
    });

    test('decodes Base64', () => {
        const btnElement = screen.getByText(/Base64 Decode/);
        expect(btnElement).toBeInTheDocument();
        fireEvent.change(textareaElement, { target: { value: testString } });
        btnElement.click();
        expect(textareaElement.innerHTML).toBe(testString);
    });
});
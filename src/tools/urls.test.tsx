import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Urls from './urls';

const testString = " !\"#$%'()*+,-./0123456789:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`上海+中國";

describe('Urls', () => {
    let textareaElement: HTMLElement;

    beforeEach(() => {
        render(<Urls />);
        textareaElement = screen.getByTestId(/textareadTestId/);
    });

    test('encodes urls', () => {
        const btnElement = screen.getByText(/Encode URL/);
        expect(btnElement).toBeInTheDocument();
        fireEvent.change(textareaElement, { target: { value: testString } });
        btnElement.click();
        expect(textareaElement.innerHTML).toBe(encodeURIComponent(testString));
    });

    test('decodes urls', () => {
        const btnElement = screen.getByText(/Decode URL/);
        expect(btnElement).toBeInTheDocument();
        fireEvent.change(textareaElement, { target: { value: testString } });
        btnElement.click();
        expect(textareaElement.innerHTML).toBe(testString);
    });
});
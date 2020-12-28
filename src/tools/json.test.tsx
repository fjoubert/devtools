import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Json, { escape, minify, prettify, unescape } from './json';

const testString = JSON.stringify({ abc: 123, def: 456, ghi: { jkl: 789 } });

describe('Json', () => {
    let textareaElement: HTMLElement;

    beforeEach(() => {
        render(<Json setError={jest.fn()} clearError={jest.fn()} />);
        textareaElement = screen.getByTestId(/textareadTestId/);
    });

    let actions = new Map<string, Function>([
        ['prettify', prettify],
        ['minify', minify],
        ['escape', escape],
        ['unescape', unescape]
    ]);

    test('json actions', () => {
        Object.keys(actions).forEach((actionKey) => {
            it(`${actionKey} json`, () => {
                const btnElement = screen.getByText(new RegExp(`^${actionKey}`, 'i'));
                expect(btnElement).toBeInTheDocument();
                fireEvent.change(textareaElement, { target: { value: testString } });
                btnElement.click();
                expect(textareaElement.innerHTML).toBe(actions.get(actionKey)!(testString));
            });
        });
    });
});

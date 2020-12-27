import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { tools } from './App';

test('renders nav and placeholder content', () => {
  render(<App />);
  const linkElement = screen.getByText(/Here goes the home page content/);
  expect(linkElement).toBeInTheDocument();

  tools.map((tool) => {
    const navElement = screen.getByText(tool.title);
    expect(navElement).toBeInTheDocument();
  });
});

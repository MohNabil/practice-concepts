import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app-link');
  expect(linkElement).toBeInTheDocument();
});

test('link is correct', () => {
  render(<App />);
  const linkElement: HTMLAnchorElement = screen.getByTestId('app-link');
  expect(linkElement.href).toContain('google.com');
});

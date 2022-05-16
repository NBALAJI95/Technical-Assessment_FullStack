import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('testing app components', () => {
  test('renders app container', () => {
    render(<App />);
    expect(screen.getByTestId("app-container")).toBeInTheDocument();
  });

  test('renders app bar', () => {
    render(<App />);
    expect(screen.getByTestId("app-bar")).toBeInTheDocument();
  });

  test('renders places heading', () => {
    render(<App />);
    expect(screen.getByTestId("places-heading")).toBeInTheDocument();
  });

  test('renders places list', () => {
    render(<App />);
    expect(screen.getByTestId("places-list")).toBeInTheDocument();
  });
});

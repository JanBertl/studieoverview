import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './Components/App';
import 

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("footer");
  expect(linkElement).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Online Voting System text', () => {
  render(<App />);
  const titleElement = screen.getByText(/online voting system/i);
  expect(titleElement).toBeInTheDocument();
});

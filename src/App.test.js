import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/Manoj builds full stack products/i);
  expect(heading).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('render App correctly', () => {
  render(<App />);
  const divApp = screen.getByTestId('app-element');
  expect(divApp).toBeInTheDocument();
});

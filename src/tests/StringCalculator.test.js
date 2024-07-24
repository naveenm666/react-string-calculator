import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../components/StringCalculator';

test('handles empty string', () => {
  render(<StringCalculator />);
  const input = screen.getByPlaceholderText('Enter numbers');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: '' } });
  fireEvent.click(button);

  expect(screen.getByText('Result: 0')).toBeInTheDocument();
});

test('handles single number', () => {
  render(<StringCalculator />);
  const input = screen.getByPlaceholderText('Enter numbers');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: '1' } });
  fireEvent.click(button);

  expect(screen.getByText('Result: 1')).toBeInTheDocument();
});

test('handles two numbers', () => {
  render(<StringCalculator />);
  const input = screen.getByPlaceholderText('Enter numbers');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: '1,2' } });
  fireEvent.click(button);

  expect(screen.getByText('Result: 3')).toBeInTheDocument();
});

  
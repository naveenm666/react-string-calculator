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

test('handles multiple numbers', () => {
  render(<StringCalculator />);
  const input = screen.getByPlaceholderText('Enter numbers');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: '1,2,3' } });
  fireEvent.click(button);

  expect(screen.getByText('Result: 6')).toBeInTheDocument();
});

test('handles new lines between numbers', () => {
  render(<StringCalculator />);
  const input = screen.getByPlaceholderText('Enter numbers');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: '1\n2,3' } });
  fireEvent.click(button);

  expect(screen.getByText('Result: 6')).toBeInTheDocument();
});

test('handles different delimiters', () => {
  render(<StringCalculator />);
  const input = screen.getByPlaceholderText('Enter numbers');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: '//;\n1;2' } });
  fireEvent.click(button);

  expect(screen.getByText('Result: 3')).toBeInTheDocument();
});

test('throws error for negative numbers', () => {
  render(<StringCalculator />);
  const input = screen.getByPlaceholderText('Enter numbers');
  const button = screen.getByText('Add');

  fireEvent.change(input, { target: { value: '1,-2,3' } });
  fireEvent.click(button);

  expect(screen.getByText(/Error: negative numbers not allowed/)).toBeInTheDocument();
});

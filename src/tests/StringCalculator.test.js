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

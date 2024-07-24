import { render, screen, fireEvent } from '@testing-library/react';
import StringCalculator from '../components/StringCalculator';

test('handles single number', () => {
    render(<StringCalculator />);
    const input = screen.getByPlaceholderText('Enter numbers');
    const button = screen.getByText('Add');
  
    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.click(button);
  
    expect(screen.getByText('Result: 1')).toBeInTheDocument();
  });
  
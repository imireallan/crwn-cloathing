import { render, screen } from '@testing-library/react';
import { MenuItem } from './menu-item.component'

test('renders the homepage component', () => {
    render(<MenuItem />);
    const spanElement = screen.getByText(/shop now/i);
    expect(spanElement).toBeInTheDocument();
});

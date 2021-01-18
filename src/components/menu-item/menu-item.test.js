import { render } from '@testing-library/react';
import { MenuItem } from './menu-item.component';

describe('MenuItem Component', () => {
    const props = {
        title: 'Mens',
        imageUrl: 'http://imageUrl',
    };
    test('renders the "shop now" text', () => {
        const { getByText } = render(<MenuItem />);
        getByText('shop now');
    });

    test('MenuItem renders the "title" prop', () => {
        const { getByText } = render(<MenuItem {...props} />);
        getByText('Mens');
    });

    test('MenuItem renders a large image if "size" prop is defined', () => {
        const { container } = render(<MenuItem {...props} size="large" />);
        expect(container.firstChild.classList.contains('large')).toBe(true);
    });
});

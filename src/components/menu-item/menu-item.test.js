import { render } from '@testing-library/react';
import { MenuItem } from './menu-item.component';

describe('MenuItem Component', () => {
    const props = {
        title: 'mens',
        imageUrl: 'http://imageUrl',
    };
    test('renders the "shop now" text', () => {
        const { getByText } = render(<MenuItem {...props} />);
        getByText('shop now');
    });

    test('MenuItem renders the "title" prop', () => {
        const { getByText } = render(<MenuItem {...props} />);
        getByText('MENS');
    });

    test('MenuItem renders a large image if "size" prop is defined', () => {
        const { container } = render(<MenuItem {...props} size="large" />);
        expect(container.firstChild.classList.contains('large')).toBe(true);
    });
    test('MenuItem renders a background image given the "imageUrl" prop', () => {
        const { container } = render(<MenuItem {...props} size="large" />);
        const backgroundImage =
            container.firstChild.childNodes[0].style.backgroundImage;
        expect(backgroundImage).toEqual('url(http://imageUrl)');
    });
});

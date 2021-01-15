import { render, screen } from '@testing-library/react';
import MenuItemWithRouterProps, { MenuItem } from './menu-item.component';

describe('MenuItem Component', () => {
    const props = {
        title: 'Mens',
        imageUrl: 'http://imageUrl',
    }
    test('renders the "shop now" text', () => {
        render(<MenuItem />);
        const spanElement = screen.getByText('shop now');
        expect(spanElement).toBeInTheDocument();
    });
    // TODO: Add check on testing component wrapped in HOC
    test.skip('MenuItem wrapped with HOC receives router props', () => {
        const element = render(<MenuItemWithRouterProps/>)

    })
    test('MenuItem renders the "title" prop', () => {
        render(<MenuItem {...props}/>)
        const divElement = screen.getByText(/Mens/i)
        expect(divElement).toBeInTheDocument()
    });

    test('MenuItem renders a large image if "size" prop is defined', () => {
        const {container} = render(<MenuItem {...props} size="large"/>)
        expect(container.firstChild.classList.contains('large')).toBe(true)
    })

})

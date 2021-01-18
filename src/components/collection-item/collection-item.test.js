import { render, screen } from '@testing-library/react';
import CollectionItem from './collection-item.component';

describe('Collection component', () => {
    const props = {
        imageUrl: 'http://image',
        name: 'khaki trousers',
        price: 34,
    };
    test('CollectionItem renders a name for the collection', () => {
        const { getByText } = render(<CollectionItem {...props} />);
        getByText('khaki trousers');
    });
    test('CollectionItem renders a price for the collection', () => {
        const { getByText } = render(<CollectionItem {...props} />);
        getByText('34');
    });

    test('CollectionItem renders a background Image given the "imageUrl" prop', () => {
        const { container } = render(<CollectionItem {...props} />);
        const element = screen.getByTestId("bgImage")
        expect(element.style['_values']['background-image']).toEqual('url(http://image)');
    });
});

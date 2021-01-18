import CollectionPreview from './collection-preview.component';

import { render } from '@testing-library/react';

describe('CollectionPreview Component', () => {
    test('should render a "title" prop for the collection', () => {
        const props = {
            title: 'womens',
            items: [],
        };
        const { getByText } = render(<CollectionPreview {...props} />);
        getByText('WOMENS');
    });
});

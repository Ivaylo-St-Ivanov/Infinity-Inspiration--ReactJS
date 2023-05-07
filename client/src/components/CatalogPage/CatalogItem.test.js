import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { BrowserRouter } from 'react-router-dom';

import { CatalogItem } from './CatalogItem/CatalogItem';

describe('Catalog item', () => {
    test('Show title', () => {
        // const title = 'Test Title';

        // render(<CatalogItem title={title} />);

        // const element = screen.queryByText(title);
        // expect(element).toBeInTheDocument();
    });

    test('Click on image', async () => {
        // global.window = { location: { pathname: null} };
        // const itemId = 'id';
        // const altText = 'ImageTitle';

        // render(<CatalogItem _id={itemId} />);

        // await userEvent.click(screen.queryByAltText(altText));
        // expect(global.window.location.pathname).toContain(`/catalog/${itemId}`);
    });
});
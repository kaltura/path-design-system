import { addParameters } from '@storybook/react';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';

addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});

import React from 'react';
import { render } from '@testing-library/react';

import PathIcons from './path-icons';

describe('PathIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PathIcons />);
    expect(baseElement).toBeTruthy();
  });
});

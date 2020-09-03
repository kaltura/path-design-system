import React from 'react';
import { render } from '@testing-library/react';

import PathTheming from './path-theming';

describe('PathTheming', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PathTheming />);
    expect(baseElement).toBeTruthy();
  });
});

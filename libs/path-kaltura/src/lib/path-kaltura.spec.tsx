import React from 'react';
import { render } from '@testing-library/react';

import PathKaltura from './path-kaltura';

describe('PathKaltura', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PathKaltura />);
    expect(baseElement).toBeTruthy();
  });
});

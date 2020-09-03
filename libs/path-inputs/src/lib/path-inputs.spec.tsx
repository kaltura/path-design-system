import React from 'react';
import { render } from '@testing-library/react';

import PathInputs from './path-inputs';

describe('PathInputs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PathInputs />);
    expect(baseElement).toBeTruthy();
  });
});

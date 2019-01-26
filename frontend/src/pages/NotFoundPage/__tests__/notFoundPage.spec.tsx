import React from 'react';
import TestRenderer from 'react-test-renderer';

import { NotFoundPage } from '../notFoundPage';

describe('NotFoundPage', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <NotFoundPage />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

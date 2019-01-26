import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Footer } from '../footer';

describe('Footer', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <Footer />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

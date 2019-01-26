import 'materialize-css';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Carousel } from '../carousel';

describe('Carousel', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <Carousel />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

import 'materialize-css';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import { ParallaxPage } from '../parallaxPage';

jest.mock('../components/PrismCodes', () => 'PrismCodes');

describe('ParallaxPage', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <ParallaxPage />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

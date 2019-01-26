import React from 'react';
import TestRenderer from 'react-test-renderer';

import { Pushpin } from '../pushpin';

describe('Pushpin', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <Pushpin color='red' depth='base' />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

import React from 'react';
import TestRenderer from 'react-test-renderer';

import { TodoFooter } from '../todoFooter';

jest.mock('../components/TodoFilter', () => 'TodoFilter');

describe('TodoFooter', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TodoFooter />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

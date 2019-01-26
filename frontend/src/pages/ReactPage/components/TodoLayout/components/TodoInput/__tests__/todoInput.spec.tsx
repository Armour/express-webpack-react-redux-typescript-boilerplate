import React from 'react';
import TestRenderer from 'react-test-renderer';

import { TodoInput } from '../todoInput';

// Mock dispatch
const dispatchMock = () => { return; };

describe('TodoInput', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TodoInput onSubmit={dispatchMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

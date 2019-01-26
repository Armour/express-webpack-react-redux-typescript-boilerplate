import React from 'react';
import TestRenderer from 'react-test-renderer';

import Todo from '../todo';

// Mock dispatch
const dispatchMock = () => { return; };

describe('Todo', () => {
  it('should renders correctly', () => {
    const todo = {
      id: 'id',
      completed: false,
      text: 'text',
    };
    const renderer = TestRenderer.create(
      <Todo {...todo} onClick={dispatchMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

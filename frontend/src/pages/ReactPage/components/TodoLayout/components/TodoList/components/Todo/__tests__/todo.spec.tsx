import React from 'react';
import TestRenderer from 'react-test-renderer';

import { dispatchMock } from 'utils/mocks';
import Todo from '../todo';

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

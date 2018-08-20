import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import Todo from '../todo';

const dispatchMock = () => { return; };

describe('Todo', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <Todo onClick={dispatchMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

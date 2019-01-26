import { List } from 'immutable';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import { TodoList } from '../todoList';

jest.mock('../components/Todo', () => 'Todo');

// Mock dispatch
const dispatchMock = () => { return; };

describe('TodoList', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TodoList todos={List<any>()} toggleTodo={dispatchMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

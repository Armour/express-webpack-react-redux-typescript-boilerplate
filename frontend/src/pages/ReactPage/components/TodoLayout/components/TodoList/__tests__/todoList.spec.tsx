import { List } from 'immutable';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { TodoList } from '../todoList';

jest.mock('../components/Todo', () => ({ default: 'Todo' }));
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

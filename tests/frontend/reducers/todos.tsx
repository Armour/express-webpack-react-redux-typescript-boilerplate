import { List } from 'immutable';

import { ADD_TODO, TEST_DEFAULT_ACTION, TOGGLE_TODO } from 'constants/actions';
import { todos } from 'reducers/todos';
import { IActionAddTodo, IActionTestDefault, IActionToggleTodo, ITodo, ITodoList } from 'types';

describe('[Reducers] todos test', () => {
  const initialState: ITodoList = List<ITodo>([
    {
      id: 'initial_id',
      text: 'initial_text',
      completed: false,
    },
  ]);
  const actionAddTodo: IActionAddTodo = {
    type: ADD_TODO,
    id: 'test_id',
    text: 'test_text',
    completed: false,
  };
  const actionToggleTodo: IActionToggleTodo = {
    type: TOGGLE_TODO,
    id: 'initial_id',
  };
  const actionToggleTodoInvalid: IActionToggleTodo = {
    type: TOGGLE_TODO,
    id: 'invalid_id',
  };
  const actionTestDefault: IActionTestDefault = {
    type: TEST_DEFAULT_ACTION,
  };

  beforeEach(() => {
    expect(initialState.count()).toBe(1);
  });

  it('[todos.ADD_TODO] should return state with new todo added', () => {
    const stateAddTodo = todos(initialState, actionAddTodo);
    expect(stateAddTodo.count()).toBe(2);
    expect(stateAddTodo).toEqual(List([
      {
        id: 'initial_id',
        text: 'initial_text',
        completed: false,
      },
      {
        id: 'test_id',
        text: 'test_text',
        completed: false,
      },
    ]));
  });

  it('[todos.TOGGLE_TODO] should return state with one todo completed toggled', () => {
    const stateToggleTodo = todos(initialState, actionToggleTodo);
    expect(stateToggleTodo.count()).toBe(1);
    expect(stateToggleTodo).toEqual(List([
      {
        id: 'initial_id',
        text: 'initial_text',
        completed: true,
      },
    ]));
  });

  it('[todos.TOGGLE_TODO] should return previous state if id is not found', () => {
    const stateToggleTodoInvalid = todos(initialState, actionToggleTodoInvalid);
    expect(stateToggleTodoInvalid.count()).toBe(1);
    expect(stateToggleTodoInvalid).toEqual(List([
      {
        id: 'initial_id',
        text: 'initial_text',
        completed: false,
      },
    ]));
  });

  it('[todos.DEFAULT_ACTION] should return previous state if action is not found', () => {
    const stateTestDefault = todos(initialState, actionTestDefault);
    expect(stateTestDefault.count()).toBe(1);
    expect(stateTestDefault).toEqual(List([
      {
        id: 'initial_id',
        text: 'initial_text',
        completed: false,
      },
    ]));
  });

  it('[todos.DEFAULT_STATE] should use default state if not defined', () => {
    const stateTestDefault = todos(undefined, actionTestDefault);
    expect(stateTestDefault.count()).toBe(1);
    expect(stateTestDefault).toEqual(List([
      {
        id: 'fake_id',
        text: 'Add your own todo task above, click to mark each todo as completed',
        completed: false,
      },
    ]));
  });
});

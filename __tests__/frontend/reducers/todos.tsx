import Immutable from 'immutable';

import { ADD_TODO, TEST_DEFAULT_ACTION, TOGGLE_TODO } from 'constants/actionTypes';
import todos from 'reducers/todos';
import { IActionAddTodo, IActionTestDefault, IActionToggleTodo, ITodoModel, ITodoModelList } from 'types';

describe('[Reducers] todos test', () => {
  const state: ITodoModelList = Immutable.List<ITodoModel>([
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

  it('[todos.ADD_TODO] should return state with new todo added', () => {
    expect(state.count()).toBe(1);
    const nextState = todos(state, actionAddTodo);
    expect(nextState.count()).toBe(2);
    expect(nextState).toEqual(Immutable.List([
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
    expect(state.count()).toBe(1);
    const nextState = todos(state, actionToggleTodo);
    expect(nextState.count()).toBe(1);
    expect(nextState).toEqual(Immutable.List([
      {
        id: 'initial_id',
        text: 'initial_text',
        completed: true,
      },
    ]));
  });

  it('[todos.TOGGLE_TODO] should return previous state if id is not found', () => {
    expect(state.count()).toBe(1);
    const nextState = todos(state, actionToggleTodoInvalid);
    expect(nextState.count()).toBe(1);
    expect(nextState).toEqual(Immutable.List([
      {
        id: 'initial_id',
        text: 'initial_text',
        completed: false,
      },
    ]));
  });

  it('[todos.DEFAULT_ACTION] should return previous state if action is not found', () => {
    expect(state.count()).toBe(1);
    const nextState = todos(state, actionTestDefault);
    expect(nextState.count()).toBe(1);
    expect(nextState).toEqual(Immutable.List([
      {
        id: 'initial_id',
        text: 'initial_text',
        completed: false,
      },
    ]));
  });

  it('[todos.DEFAULT_STATE] should use default state if not defined', () => {
    const nextState = todos(undefined, actionTestDefault);
    expect(nextState.count()).toBe(1);
    expect(nextState).toEqual(Immutable.List([
      {
        id: 'fake_id',
        text: 'Add your own todo task above, click to mark each todo as completed',
        completed: false,
      },
    ]));
  });
});

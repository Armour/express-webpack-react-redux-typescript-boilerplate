import deepFreeze from 'deep-freeze';

import { ADD_TODO, TEST_INVALID_ACTION, TOGGLE_TODO } from 'constants/actionTypes';
import todos from 'reducers/todos';
import { IActionAddTodo, IActionTestInvalid, IActionToggleTodo, ITodoModel } from 'types';

describe('[Reducers] todos test', () => {
  let state: ITodoModel[] = [
    {
      id: 'initial_id',
      text: 'initial_text',
      completed: false,
    },
  ];

  it('[todos.ADD_TODO] should return new state array with added todo', () => {
    const action: IActionAddTodo = {
      type: ADD_TODO,
      id: 'test_id',
      text: 'test_text',
      completed: false,
    };
    deepFreeze(state);
    expect(state.length).toBe(1);
    const nextState = todos(state, action);
    expect(nextState.length).toBe(2);
    expect(nextState[0].id).toBe('initial_id');
    expect(nextState[0].text).toBe('initial_text');
    expect(nextState[0].completed).toBe(false);
    expect(nextState[1].id).toBe('test_id');
    expect(nextState[1].text).toBe('test_text');
    expect(nextState[1].completed).toBe(false);
  });

  it('[todos.TOGGLE_TODO] should return new state array with specific todo completed toggled', () => {
    const action: IActionToggleTodo = {
      type: TOGGLE_TODO,
      id: 'initial_id',
    };
    deepFreeze(state);
    expect(state.length).toBe(1);
    const nextState = todos(state, action);
    expect(nextState.length).toBe(1);
    expect(nextState[0].id).toBe('initial_id');
    expect(nextState[0].text).toBe('initial_text');
    expect(nextState[0].completed).toBe(true);
  });

  it('[todos.TOGGLE_TODO] should return a new copy of previous state array if the id is not exist', () => {
    const action: IActionToggleTodo = {
      type: TOGGLE_TODO,
      id: 'not_exist',
    };
    deepFreeze(state);
    expect(state.length).toBe(1);
    const nextState = todos(state, action);
    expect(nextState.length).toBe(1);
    expect(nextState[0].id).toBe('initial_id');
    expect(nextState[0].text).toBe('initial_text');
    expect(nextState[0].completed).toBe(false);
  });

  it('[todos.DEFAULT_STATE] should use default state if not defined', () => {
    const action: IActionAddTodo = {
      type: ADD_TODO,
      id: 'test_id',
      text: 'test_text',
      completed: false,
    };
    const nextState = todos(undefined, action);
    expect(nextState.length).toBe(1);
    expect(nextState[0].id).toBe('test_id');
    expect(nextState[0].text).toBe('test_text');
    expect(nextState[0].completed).toBe(false);
  });

  it('[todos.INVALID_ACTION] should return a new copy of previous state array if action is invalid', () => {
    const action: IActionTestInvalid = {
      type: TEST_INVALID_ACTION,
    };
    deepFreeze(state);
    expect(state.length).toBe(1);
    const nextState = todos(state, action);
    expect(nextState.length).toBe(1);
    expect(nextState[0].id).toBe('initial_id');
    expect(nextState[0].text).toBe('initial_text');
    expect(nextState[0].completed).toBe(false);
  });
});

import { List } from 'immutable';

import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, VISIBILITY_FILTER_OPTIONS } from '../constants';
import reducer, { getTodosStateRecord } from '../reducer';
import { IActionAddTodo, IActionSetVisibilityFilter, IActionToggleTodo, ITodo } from '../types';

describe('[Reducers] todos test', () => {
  const initialState = getTodosStateRecord({
    todos: List<ITodo>([
      {
        id: 'initial_id',
        text: 'initial_text',
        completed: false,
      },
    ]),
    visibilityFilter: VISIBILITY_FILTER_OPTIONS.SHOW_ALL,
  });

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
  const actionShowAll: IActionSetVisibilityFilter = {
    type: SET_VISIBILITY_FILTER,
    filter: VISIBILITY_FILTER_OPTIONS.SHOW_ALL,
  };
  const actionShowActive: IActionSetVisibilityFilter = {
    type: SET_VISIBILITY_FILTER,
    filter: VISIBILITY_FILTER_OPTIONS.SHOW_ACTIVE,
  };
  const actionShowCompleted: IActionSetVisibilityFilter = {
    type: SET_VISIBILITY_FILTER,
    filter: VISIBILITY_FILTER_OPTIONS.SHOW_COMPLETED,
  };

  beforeEach(() => {
    expect(initialState.todos.count()).toBe(1);
    expect(initialState.visibilityFilter).toBe(VISIBILITY_FILTER_OPTIONS.SHOW_ALL);
  });

  it('[ADD_TODO] should return state with new todo added', () => {
    const stateAddTodo = reducer(initialState, actionAddTodo);
    expect(stateAddTodo.visibilityFilter).toEqual(initialState.visibilityFilter);
    expect(stateAddTodo.todos).toEqual(List([
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

  it('[TOGGLE_TODO] should return state with one todo completed toggled', () => {
    const stateToggleTodo = reducer(initialState, actionToggleTodo);
    expect(stateToggleTodo.visibilityFilter).toEqual(initialState.visibilityFilter);
    expect(stateToggleTodo.todos).toEqual(List([
      {
        id: 'initial_id',
        text: 'initial_text',
        completed: true,
      },
    ]));
  });

  it('[TOGGLE_TODO] should return previous state if id is not found', () => {
    const stateToggleTodoInvalid = reducer(initialState, actionToggleTodoInvalid);
    expect(stateToggleTodoInvalid.visibilityFilter).toEqual(initialState.visibilityFilter);
    expect(stateToggleTodoInvalid.todos).toEqual(initialState.todos);
  });

  it('[SET_VISIBILITY_FILTER] should return state with corresponding filter', () => {
    const stateShowCompleted = reducer(initialState, actionShowCompleted);
    expect(stateShowCompleted.visibilityFilter).toBe(VISIBILITY_FILTER_OPTIONS.SHOW_COMPLETED);
    expect(stateShowCompleted.todos).toEqual(initialState.todos);

    const stateShowActive = reducer(stateShowCompleted, actionShowActive);
    expect(stateShowActive.visibilityFilter).toBe(VISIBILITY_FILTER_OPTIONS.SHOW_ACTIVE);
    expect(stateShowActive.todos).toEqual(initialState.todos);

    const stateShowAll = reducer(stateShowActive, actionShowAll);
    expect(stateShowAll.visibilityFilter).toBe(VISIBILITY_FILTER_OPTIONS.SHOW_ALL);
    expect(stateShowAll.todos).toEqual(initialState.todos);
  });

  it('[DEFAULT_ACTION] should return previous state if action is not found', () => {
    const stateTestDefault = reducer(initialState, {} as any);
    expect(stateTestDefault.visibilityFilter).toEqual(initialState.visibilityFilter);
    expect(stateTestDefault.todos).toEqual(initialState.todos);
  });

  it('[UNDEFINED_STATE] should use default state if state is not defined', () => {
    const stateTestUndefined = reducer(undefined, {} as any);
    expect(stateTestUndefined.visibilityFilter).toEqual(initialState.visibilityFilter);
    expect(stateTestUndefined.todos).toEqual(List([
      {
        id: 'fake_id',
        text: 'Add your own todo task above, click to mark each todo as completed',
        completed: false,
      },
    ]));
  });
});

import { List } from 'immutable';

import { ADD_TODO, SET_VISIBILITY_FILTER, TEST_DEFAULT_ACTION, TOGGLE_TODO, VisibilityFiltersOptions } from 'constants/actions';
import { todos } from 'reducers/todos';
import { IActionAddTodo, IActionSetVisibilityFilter, IActionTestDefault, IActionToggleTodo, ITodo, ITodosState } from 'types';

describe('[Reducers] todos test', () => {
  const initialState: ITodosState = {
    todos: List<ITodo>([
      {
        id: 'initial_id',
        text: 'initial_text',
        completed: false,
      },
    ]),
    visibilityFilter: VisibilityFiltersOptions.SHOW_ALL,
  };

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
    filter: VisibilityFiltersOptions.SHOW_ALL,
  };
  const actionShowActive: IActionSetVisibilityFilter = {
    type: SET_VISIBILITY_FILTER,
    filter: VisibilityFiltersOptions.SHOW_ACTIVE,
  };
  const actionShowCompleted: IActionSetVisibilityFilter = {
    type: SET_VISIBILITY_FILTER,
    filter: VisibilityFiltersOptions.SHOW_COMPLETED,
  };
  const actionTestDefault: IActionTestDefault = {
    type: TEST_DEFAULT_ACTION,
  };

  beforeEach(() => {
    expect(initialState.todos.count()).toBe(1);
    expect(initialState.visibilityFilter).toBe(VisibilityFiltersOptions.SHOW_ALL);
  });

  it('[ADD_TODO] should return state with new todo added', () => {
    const stateAddTodo = todos(initialState, actionAddTodo);
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
    const stateToggleTodo = todos(initialState, actionToggleTodo);
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
    const stateToggleTodoInvalid = todos(initialState, actionToggleTodoInvalid);
    expect(stateToggleTodoInvalid.visibilityFilter).toEqual(initialState.visibilityFilter);
    expect(stateToggleTodoInvalid.todos).toEqual(initialState.todos);
  });

  it('[SET_VISIBILITY_FILTER] should return state with corresponding filter', () => {
    const stateShowCompleted = todos(initialState, actionShowCompleted);
    expect(stateShowCompleted.visibilityFilter).toBe(VisibilityFiltersOptions.SHOW_COMPLETED);
    expect(stateShowCompleted.todos).toEqual(initialState.todos);

    const stateShowActive = todos(stateShowCompleted, actionShowActive);
    expect(stateShowActive.visibilityFilter).toBe(VisibilityFiltersOptions.SHOW_ACTIVE);
    expect(stateShowActive.todos).toEqual(initialState.todos);

    const stateShowAll = todos(stateShowActive, actionShowAll);
    expect(stateShowAll.visibilityFilter).toBe(VisibilityFiltersOptions.SHOW_ALL);
    expect(stateShowAll.todos).toEqual(initialState.todos);
  });

  it('[DEFAULT_ACTION] should return previous state if action is not found', () => {
    const stateTestDefault = todos(initialState, actionTestDefault);
    expect(stateTestDefault.visibilityFilter).toEqual(initialState.visibilityFilter);
    expect(stateTestDefault.todos).toEqual(initialState.todos);
  });

  it('[UNDEFINED_STATE] should use default state if not defined', () => {
    const stateTestUndefined = todos(undefined, actionTestDefault);
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

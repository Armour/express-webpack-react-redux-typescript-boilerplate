import { addTodo, setVisibilityFilter, toggleTodo } from 'actions/todoList';
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, VisibilityFiltersOptions } from 'constants/actionTypes';
import { IActionAddTodo, IActionSetVisibilityFilter, IActionToggleTodo } from 'types';

describe('[Actions] todoList test', () => {
  it('[addTodo] should return IActionAddTodo with input text, random id string and completed as false', () => {
    const action: IActionAddTodo = addTodo('text');
    expect(action.type === ADD_TODO).toBeTruthy();
    expect(typeof action.id === 'string').toBeTruthy();
    expect(action.text).toBe('text');
    expect(action.completed).toBe(false);
  });

  it('[toggleTodo] should return IActionToggleTodo with input id', () => {
    const action: IActionToggleTodo = toggleTodo('id');
    expect(action.type === TOGGLE_TODO).toBeTruthy();
    expect(action.id).toBe('id');
  });

  it('[setVisibilityFilter] should return SET_VISIBILITY_FILTER action with input filter', () => {
    const action1: IActionSetVisibilityFilter = setVisibilityFilter(VisibilityFiltersOptions.SHOW_ALL);
    const action2: IActionSetVisibilityFilter = setVisibilityFilter(VisibilityFiltersOptions.SHOW_ACTIVE);
    const action3: IActionSetVisibilityFilter = setVisibilityFilter(VisibilityFiltersOptions.SHOW_COMPLETED);
    expect(action1.type === SET_VISIBILITY_FILTER).toBeTruthy();
    expect(action2.type === SET_VISIBILITY_FILTER).toBeTruthy();
    expect(action3.type === SET_VISIBILITY_FILTER).toBeTruthy();
    expect(action1.filter).toBe(VisibilityFiltersOptions.SHOW_ALL);
    expect(action2.filter).toBe(VisibilityFiltersOptions.SHOW_ACTIVE);
    expect(action3.filter).toBe(VisibilityFiltersOptions.SHOW_COMPLETED);
  });
});

import { addTodo, setVisibilityFilter, toggleTodo } from 'actions/todoList';
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, VisibilityFiltersOptions } from 'constants/actionTypes';
import { IActionAddTodo, IActionSetVisibilityFilter, IActionToggleTodo } from 'types';

describe('[Actions] todoList test', () => {
  it('[addTodo] should return IActionAddTodo with input text, random id string and completed as false', () => {
    const res: IActionAddTodo = addTodo('text');
    expect(res.type === ADD_TODO).toBeTruthy();
    expect(typeof res.id === 'string').toBeTruthy();
    expect(res.text).toBe('text');
    expect(res.completed).toBe(false);
  });

  it('[toggleTodo] should return IActionToggleTodo with input id', () => {
    const res: IActionToggleTodo = toggleTodo('id');
    expect(res.type === TOGGLE_TODO).toBeTruthy();
    expect(res.id).toBe('id');
  });

  it('[setVisibilityFilter] should return SET_VISIBILITY_FILTER action with input filter', () => {
    const res1: IActionSetVisibilityFilter = setVisibilityFilter(VisibilityFiltersOptions.SHOW_ALL);
    const res2: IActionSetVisibilityFilter = setVisibilityFilter(VisibilityFiltersOptions.SHOW_ACTIVE);
    const res3: IActionSetVisibilityFilter = setVisibilityFilter(VisibilityFiltersOptions.SHOW_COMPLETED);
    expect(res1.type === SET_VISIBILITY_FILTER).toBeTruthy();
    expect(res2.type === SET_VISIBILITY_FILTER).toBeTruthy();
    expect(res3.type === SET_VISIBILITY_FILTER).toBeTruthy();
    expect(res1.filter).toBe(VisibilityFiltersOptions.SHOW_ALL);
    expect(res2.filter).toBe(VisibilityFiltersOptions.SHOW_ACTIVE);
    expect(res3.filter).toBe(VisibilityFiltersOptions.SHOW_COMPLETED);
  });
});

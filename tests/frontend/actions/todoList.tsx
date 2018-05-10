import { addTodo, setVisibilityFilter, toggleTodo } from 'actions/todoList';
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from 'constants/actions';
import { VisibilityFiltersOptions } from 'constants/visibilityFilers';
import { IActionAddTodo, IActionSetVisibilityFilter, IActionToggleTodo } from 'types';

describe('[Actions] todoList test', () => {
  it('[addTodo] should return IActionAddTodo with input text, random id string and completed as false', () => {
    const actionAddTodo: IActionAddTodo = addTodo('text');
    expect(actionAddTodo.type === ADD_TODO).toBeTruthy();
    expect(typeof actionAddTodo.id === 'string').toBeTruthy();
    expect(actionAddTodo.text).toBe('text');
    expect(actionAddTodo.completed).toBe(false);
  });

  it('[toggleTodo] should return IActionToggleTodo with input id', () => {
    const actionToggleTodo: IActionToggleTodo = toggleTodo('id');
    expect(actionToggleTodo.type === TOGGLE_TODO).toBeTruthy();
    expect(actionToggleTodo.id).toBe('id');
  });

  it('[setVisibilityFilter] should return SET_VISIBILITY_FILTER action with input filter', () => {
    const actionSetVisibilityShowAll: IActionSetVisibilityFilter = setVisibilityFilter(VisibilityFiltersOptions.SHOW_ALL);
    expect(actionSetVisibilityShowAll.type === SET_VISIBILITY_FILTER).toBeTruthy();
    expect(actionSetVisibilityShowAll.filter).toBe(VisibilityFiltersOptions.SHOW_ALL);

    const actionSetVisibilityShowActive: IActionSetVisibilityFilter = setVisibilityFilter(VisibilityFiltersOptions.SHOW_ACTIVE);
    expect(actionSetVisibilityShowActive.type === SET_VISIBILITY_FILTER).toBeTruthy();
    expect(actionSetVisibilityShowActive.filter).toBe(VisibilityFiltersOptions.SHOW_ACTIVE);

    const actionSetVisibilityShowComleted: IActionSetVisibilityFilter = setVisibilityFilter(VisibilityFiltersOptions.SHOW_COMPLETED);
    expect(actionSetVisibilityShowComleted.type === SET_VISIBILITY_FILTER).toBeTruthy();
    expect(actionSetVisibilityShowComleted.filter).toBe(VisibilityFiltersOptions.SHOW_COMPLETED);
  });
});

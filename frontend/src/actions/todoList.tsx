import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from 'constants/actions';
import { IActionAddTodo, IActionSetVisibilityFilter, IActionToggleTodo, IVisibilityFilterOption } from 'types';

import { v4 } from 'uuid';

export const addTodo = (text: string): IActionAddTodo => ({
  type: ADD_TODO,
  id: v4(),
  text,
  completed: false,
});

export const toggleTodo = (id: string): IActionToggleTodo => ({
  type: TOGGLE_TODO,
  id,
});

export const setVisibilityFilter = (filter: IVisibilityFilterOption): IActionSetVisibilityFilter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

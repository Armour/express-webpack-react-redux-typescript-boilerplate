import { v4 } from 'uuid';

import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from './constants';
import { IActionAddTodo, IActionSetVisibilityFilter, IActionToggleTodo } from './types';

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

export const setVisibilityFilter = (filter: string): IActionSetVisibilityFilter => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

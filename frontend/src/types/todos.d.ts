import { List } from 'immutable';

import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from 'constants/actions';
import { IActionTestDefault } from './common';

// Todos state
export interface ITodosState {
  todos: List<ITodo>;
  visibilityFilter: string;
}
export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}
export interface IVisibilityFiltersOptions {
  SHOW_ALL: string;
  SHOW_COMPLETED: string;
  SHOW_ACTIVE: string;
}

// Todos actions
export interface IActionAddTodo {
  type: typeof ADD_TODO;
  id: string;
  text: string;
  completed: boolean;
}
export interface IActionToggleTodo {
  type: typeof TOGGLE_TODO;
  id: string;
}
export interface IActionSetVisibilityFilter {
  type: typeof SET_VISIBILITY_FILTER;
  filter: string;
}

export type IActionsTodo =
  | IActionAddTodo
  | IActionToggleTodo
  | IActionSetVisibilityFilter
  | IActionTestDefault;

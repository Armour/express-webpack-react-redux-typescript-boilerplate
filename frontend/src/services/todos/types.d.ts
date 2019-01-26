import { List, Record } from 'immutable';

import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from './constants';

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
export interface ITodosStateRecord extends Record<ITodosState>, ITodosState {}

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

export type IActionsTodo
  = IActionAddTodo
  | IActionToggleTodo
  | IActionSetVisibilityFilter;

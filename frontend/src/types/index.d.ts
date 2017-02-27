import { ADD_TODO, TOGGLE_TODO } from 'constants/actionTypes';
import { SET_VISIBILITY_FILTER } from 'constants/actionTypes';
import { VisibilityFiltersOptions } from 'constants/actionTypes';

export interface ITodoModel {
  id: string;
  text: string;
  completed: boolean;
}

export interface ITodoAppState {
  todos: ITodoModel[];
  visibilityFilter: IVisibilityFilterOptions;
}

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

export type IActionsTodo = IActionAddTodo | IActionToggleTodo;

export interface IActionSetVisibilityFilter {
  type: typeof SET_VISIBILITY_FILTER;
  filter: IVisibilityFilterOptions;
}

export type IActionsFilter = IActionSetVisibilityFilter;

export type IVisibilityFilterOptions = string;

export { ITodoInputStateProps, ITodoInputDispatchProps } from 'components/TodoInput';
export { ITodoLinkStateProps, ITodoLinkDispatchProps } from 'components/TodoLink';
export { ITodoListStateProps, ITodoListDispatchProps } from 'components/TodoList';

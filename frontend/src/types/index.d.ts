import { ADD_TODO, TOGGLE_TODO } from 'constants/actionTypes';
import { SET_VISIBILITY_FILTER } from 'constants/actionTypes';
import { TEST_INVALID_ACTION, VisibilityFiltersOptions } from 'constants/actionTypes';

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

export interface IActionTestInvalid {
  type: typeof TEST_INVALID_ACTION;
}

export type IActionsTodo = IActionAddTodo | IActionToggleTodo | IActionTestInvalid;

export interface IActionSetVisibilityFilter {
  type: typeof SET_VISIBILITY_FILTER;
  filter: IVisibilityFilterOptions;
}

export type IActionsFilter = IActionSetVisibilityFilter | IActionTestInvalid;

export type IVisibilityFilterOptions = string;

export { ITodoInputStateProps, ITodoInputDispatchProps } from 'components/TodoInput';
export { ITodoLinkStateProps, ITodoLinkDispatchProps } from 'components/TodoLink';
export { ITodoListStateProps, ITodoListDispatchProps } from 'components/TodoList';

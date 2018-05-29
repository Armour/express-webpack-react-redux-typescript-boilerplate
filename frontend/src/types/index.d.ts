import { List, Set } from 'immutable';

// Constants
import { ADD_TODO, RECEIVE_NOTE, SET_VISIBILITY_FILTER, TOGGLE_TODO } from 'constants/actions';
import { DEFAULT_RECEIVE_ERROR, RECEIVE_RESPONSE, START_REQUEST } from 'constants/actions';
import { TEST_DEFAULT_ACTION } from 'constants/actions';

// Components Interfaces
export { INoteFetcherStateProps, INoteFetcherDispatchProps } from 'components/FetchNote';
export { ITodoLinkStateProps, ITodoLinkDispatchProps } from 'components/TodoLink';
export { ITodoListStateProps, ITodoListDispatchProps } from 'components/TodoList';
export { ITodoInputDispatchProps } from 'components/TodoInput';
export { IFilterLinkProps } from 'containers/FilterLink';

// Global State
export interface IAppState {
  todos: ITodoList;
  visibilityFilter: IVisibilityFilterOption;
  fetching: IFetchingSet;
  notes: INoteList;
}

// Todos
export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}
export type ITodoList = List<ITodo>;

// VisibilityFilter
export type IVisibilityFilterOption = string;

// Fetching
export type IFetchingSet = Set<string>;

// Notes
export interface INote {
  id: number;
  content: string;
}
export type INoteList = List<INote>;

// Todo Actions
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
export type IActionsTodo =
  | IActionAddTodo
  | IActionToggleTodo
  | IActionTestDefault;

// VisibilityFilter Actions
export interface IActionSetVisibilityFilter {
  type: typeof SET_VISIBILITY_FILTER;
  filter: IVisibilityFilterOption;
}
export type IActionsFilter =
  | IActionSetVisibilityFilter
  | IActionTestDefault;

// Fetching Actions
export interface IActionStartRequest {
  type: typeof START_REQUEST;
  url: string;
  method: string;
}
export interface IActionReceiveResponse {
  type: typeof RECEIVE_RESPONSE;
  url: string;
  method: string;
}
export interface IActionDefaultReceiveError {
  type: typeof DEFAULT_RECEIVE_ERROR;
  url: string;
  error: string;
}
export type IActionsFetchApi =
  | IActionStartRequest
  | IActionReceiveResponse
  | IActionDefaultReceiveError
  | IActionTestDefault;

// Notes Actions
export interface IActionReceiveNote {
  type: typeof RECEIVE_NOTE;
  data: {
    notes: INoteList;
    code: number;
  };
}
export type IActionsFetchNote =
  | IActionReceiveNote
  | IActionTestDefault;

// Default Action for code coverage (default switch branch)
export interface IActionTestDefault {
  type: typeof TEST_DEFAULT_ACTION;
}

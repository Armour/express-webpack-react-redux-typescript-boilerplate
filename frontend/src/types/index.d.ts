import { List, Map, Set } from 'immutable';

// Constants
import { ADD_TODO, RECEIVE_NOTE, SET_VISIBILITY_FILTER, TOGGLE_TODO } from 'constants/actions';
import { DEFAULT_RECEIVE_ERROR, RECEIVE_RESPONSE, START_REQUEST } from 'constants/actions';
import { TEST_DEFAULT_ACTION } from 'constants/actions';

// Components Interfaces
export { INoteFetcherStateProps, INoteFetcherDispatchProps } from 'components/FetchNote';
export { ITodoLinkStateProps, ITodoLinkDispatchProps } from 'components/TodoLink';
export { ITodoListStateProps, ITodoListDispatchProps } from 'components/TodoList';
export { ITodoInputDispatchProps } from 'components/TodoInput';

// Global State
export type IAppState = {
  todos: ITodoList;
  visibilityFilter: IVisibilityFilterOption;
  fetching: IFetchingSet;
  noteData: INoteDataMap;
};

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

// NoteData
export interface INoteData {
  content: string;
}
export type INoteDataMap = Map<string, INoteData>;

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

// NoteData Actions
export interface IActionReceiveNote {
  type: typeof RECEIVE_NOTE;
  data: INoteData;
}
export type IActionsFetchNote =
  | IActionReceiveNote
  | IActionTestDefault;

// Default Action for code coverage (default switch branch)
export interface IActionTestDefault {
  type: typeof TEST_DEFAULT_ACTION;
}

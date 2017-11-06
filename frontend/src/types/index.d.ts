import Immutable from 'immutable';

import { ADD_TODO, TOGGLE_TODO } from 'constants/actionTypes';
import { SET_VISIBILITY_FILTER, VisibilityFiltersOptions } from 'constants/actionTypes';
import { RECEIVE_ERROR, RECEIVE_RESPONSE, START_REQUEST } from 'constants/actionTypes';
import { TEST_DEFAULT_ACTION } from 'constants/actionTypes';

// Components Interfaces
export { IApiLoaderStateProps, IApiLoaderDispatchProps } from 'components/ApiLoader';
export { ITodoLinkStateProps, ITodoLinkDispatchProps } from 'components/TodoLink';
export { ITodoListStateProps, ITodoListDispatchProps } from 'components/TodoList';
export { ITodoInputDispatchProps } from 'components/TodoInput';

// Todo App State
export interface ITodoModel {
  id: string;
  text: string;
  completed: boolean;
}

export type ITodoModelList = Immutable.List<ITodoModel>;

export type IVisibilityFilterOption = string;

export interface ITodoAppState {
  todos: ITodoModelList;
  visibilityFilter: IVisibilityFilterOption;
}

// Async Api Call State
export interface IApiData {
  content: string;
  isFetching: boolean;
  hasError: boolean;
}

export type IApiDataMap = Immutable.Map<string, IApiData>;

export interface IAsyncApiCallState {
  apiData: IApiDataMap;
}

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

export type IActionsTodo = IActionAddTodo | IActionToggleTodo | IActionTestDefault;

// Filter Actions
export interface IActionSetVisibilityFilter {
  type: typeof SET_VISIBILITY_FILTER;
  filter: IVisibilityFilterOption;
}

export type IActionsFilter = IActionSetVisibilityFilter | IActionTestDefault;

// Async Api Call Actions
export interface IActionStartRequest {
  type: typeof START_REQUEST;
  url: string;
}

export interface IActionReceiveResponse {
  type: typeof RECEIVE_RESPONSE;
  url: string;
  res: any;
}

export interface IActionReceiveError {
  type: typeof RECEIVE_ERROR;
  url: string;
  error: string;
}

export type IActionsAsyncApi = IActionStartRequest | IActionReceiveResponse | IActionReceiveError | IActionTestDefault;

// Test switch default branch for code coverage
export interface IActionTestDefault {
  type: typeof TEST_DEFAULT_ACTION;
}

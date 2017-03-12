import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from 'constants/actionTypes';
import { IActionAddTodo, IActionSetVisibilityFilter, IActionToggleTodo, IVisibilityFilterOption } from 'types';
import { v1 } from 'uuid';

export const addTodo = (text: string): IActionAddTodo => {
  return {
    type: ADD_TODO,
    id: v1(),
    text,
    completed: false,
  };
};

export const toggleTodo = (id: string): IActionToggleTodo => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const setVisibilityFilter = (filter: IVisibilityFilterOption): IActionSetVisibilityFilter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
};

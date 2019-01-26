import { List, Record } from 'immutable';

import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, VISIBILITY_FILTER_OPTIONS } from './constants';
import { IActionsTodo, ITodo, ITodosState, ITodosStateRecord } from './types';

export const getTodosStateRecord = (state: ITodosState): ITodosStateRecord => {
  class TodosStateRecord extends Record(state) implements ITodosStateRecord {}
  return new TodosStateRecord();
};

const initialState = getTodosStateRecord({
  todos: List<ITodo>([
    {
      id: 'fake_id',
      text: 'Add your own todo task above, click to mark each todo as completed',
      completed: false,
    },
  ]),
  visibilityFilter: VISIBILITY_FILTER_OPTIONS.SHOW_ALL,
});

export default (state: ITodosStateRecord = initialState, action: IActionsTodo): ITodosStateRecord => {
  switch (action.type) {
    case ADD_TODO:
      return state.update('todos', (todos) => todos.push({
        id: action.id,
        text: action.text,
        completed: action.completed,
      }));
    case TOGGLE_TODO:
      const index = state.todos.findIndex((s) => s !== undefined && s.id === action.id);
      return state.update('todos', (todos) => index === -1 ? todos : todos.update(index, (s) => ({ ...s, completed: !s.completed })));
    case SET_VISIBILITY_FILTER:
      return state.set('visibilityFilter', action.filter);
    default:
      return state;
  }
};

import { List } from 'immutable';

import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, VISIBILITY_FILTER_OPTIONS } from './constants';
import { IActionsTodo, ITodo, ITodosState } from './types';

const initialState: ITodosState = {
  todos: List<ITodo>([
    {
      id: 'fake_id',
      text: 'Add your own todo task above, click to mark each todo as completed',
      completed: false,
    },
  ]),
  visibilityFilter: VISIBILITY_FILTER_OPTIONS.SHOW_ALL,
};

export default (state = initialState, action: IActionsTodo): ITodosState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.push({
          id: action.id,
          text: action.text,
          completed: action.completed,
        }),
      };
    case TOGGLE_TODO:
      const index = state.todos.findIndex((s) => s !== undefined && s.id === action.id);
      return {
        ...state,
        todos: index === -1 ? state.todos : state.todos.update(index, (s) => ({ ...s, completed: !s.completed })),
      };
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter,
      };
    default:
      return state;
  }
};

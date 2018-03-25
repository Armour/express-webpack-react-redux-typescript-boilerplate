import { List } from 'immutable';

import { ADD_TODO, TOGGLE_TODO } from 'constants/actions';
import { IActionsTodo, ITodo, ITodoList } from 'types';

const initialState: ITodoList = List<ITodo>([
  {
    id: 'fake_id',
    text: 'Add your own todo task above, click to mark each todo as completed',
    completed: false,
  },
]);

export const todos = (state = initialState, action: IActionsTodo): ITodoList => {
  switch (action.type) {
  case ADD_TODO:
    return state.push({
      id: action.id,
      text: action.text,
      completed: action.completed,
    });
  case TOGGLE_TODO:
    const index = state.findIndex((s) => s !== undefined && s.id === action.id);
    return index === -1 ? state : state.update(index, (s) => ({ ...s, completed: !s.completed }));
  default:
    return state;
  }
};

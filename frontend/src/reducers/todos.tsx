import { ADD_TODO, TOGGLE_TODO } from 'constants/actionTypes';
import { IActionsTodo, ITodoModel } from 'types';

const todos = (state: ITodoModel[] = [], action: IActionsTodo): ITodoModel[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed,
        },
      ];
    case TOGGLE_TODO:
      return state.map(s => {
        if (s.id !== action.id) {
          return s;
        }
        return Object.assign({}, s, {
          completed: !s.completed,
        });
      });
    default:
      return state;
  }
};

export default todos;

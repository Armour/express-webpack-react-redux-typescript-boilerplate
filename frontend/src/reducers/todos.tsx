import { ADD_TODO, TOGGLE_TODO } from 'constants/actionTypes';
import { IActionsTodo, ITodoModel } from 'types';

const defaultTodoModel: ITodoModel = {
  id: 'default_id',
  text: 'default_text',
  completed: false,
};

const todo = (state: ITodoModel = defaultTodoModel, action: IActionsTodo): ITodoModel => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed,
      });
    default:
      return state;
  }
};

const todos = (state: ITodoModel[] = [], action: IActionsTodo): ITodoModel[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action),
      ];
    case TOGGLE_TODO:
      return state.map(t =>
        todo(t, action),
      );
    default:
      return state;
  }
};

export default todos;

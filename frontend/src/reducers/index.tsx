import { combineReducers } from 'redux';

import notesReducer from 'services/notes/reducer';
import todosReducer from 'services/todos/reducer';
import { IGlobalState } from 'types/global';

export default combineReducers<IGlobalState>({
  notesState: notesReducer,
  todosState: todosReducer,
});

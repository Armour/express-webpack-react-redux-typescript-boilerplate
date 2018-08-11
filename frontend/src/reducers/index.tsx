import { combineReducers } from 'redux';

import { notes } from 'services/notes/reducer';
import { todos } from 'services/todos/reducer';
import { IGlobalState } from 'types/global';

export default combineReducers<IGlobalState>({
  notesState: notes,
  todosState: todos,
});

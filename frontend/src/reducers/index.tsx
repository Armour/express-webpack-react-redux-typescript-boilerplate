import { combineReducers } from 'redux';

import { IGlobalState } from 'types';
import { notes } from './notes';
import { todos } from './todos';

export default combineReducers<IGlobalState>({
  notesState: notes,
  todosState: todos,
});

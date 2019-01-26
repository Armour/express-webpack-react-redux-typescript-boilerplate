import { connectRouter } from 'connected-react-router/immutable';
import { History } from 'history';
import { combineReducers } from 'redux-immutable';

import notesReducer from 'services/notes/reducer';
import todosReducer from 'services/todos/reducer';
import { IGlobalState } from 'types/global';

export default (history: History) => combineReducers<IGlobalState>({
  router: connectRouter(history),
  notesState: notesReducer,
  todosState: todosReducer,
});

import { combineReducers } from 'redux';

import { fetchingData } from 'reducers/fetchingData';
import { notes } from 'reducers/notes';
import { todos } from 'reducers/todos';
import { visibilityFilter } from 'reducers/visibilityFilter';

export const reducers = combineReducers({
  fetchingData,
  notes,
  todos,
  visibilityFilter,
});

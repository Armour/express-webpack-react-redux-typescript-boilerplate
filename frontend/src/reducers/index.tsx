import { combineReducers } from 'redux';

import { fetching } from 'reducers/fetching';
import { notes } from 'reducers/notes';
import { todos } from 'reducers/todos';
import { visibilityFilter } from 'reducers/visibilityFilter';

export const reducers = combineReducers({
  fetching,
  notes,
  todos,
  visibilityFilter,
});

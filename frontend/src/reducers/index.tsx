import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import { apiData } from 'reducers/apiData';
import { todos } from 'reducers/todos';
import { visibilityFilter } from 'reducers/visibilityFilter';

export default combineReducers({
  apiData,
  todos,
  visibilityFilter,
  routing: routerReducer,
});

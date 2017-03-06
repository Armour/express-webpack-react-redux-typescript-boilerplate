import deepFreeze from 'deep-freeze';

import { SET_VISIBILITY_FILTER, TEST_INVALID_ACTION, VisibilityFiltersOptions } from 'constants/actionTypes';
import visibilityFilter from 'reducers/visibilityFilter';
import { IActionsFilter, IActionTestInvalid, IVisibilityFilterOptions } from 'types';

describe('[Reducers] visibilityFilter test', () => {
  let state: IVisibilityFilterOptions = VisibilityFiltersOptions.SHOW_ALL;

  it('[visibilityFilter.SET_VISIBILITY_FILTER] should return new filter type', () => {
    const action: IActionsFilter = {
      type: SET_VISIBILITY_FILTER,
      filter: VisibilityFiltersOptions.SHOW_ACTIVE,
    };
    deepFreeze(state);
    expect(state).toBe(VisibilityFiltersOptions.SHOW_ALL);
    const nextState = visibilityFilter(state, action);
    expect(nextState).toBe(VisibilityFiltersOptions.SHOW_ACTIVE);
  });

  it('[visibilityFilter.INVALID_ACTION] should return a new copy of previous state array if action is invalid', () => {
    const action: IActionTestInvalid = {
      type: TEST_INVALID_ACTION,
    };
    deepFreeze(state);
    expect(state).toBe(VisibilityFiltersOptions.SHOW_ALL);
    const nextState = visibilityFilter(state, action);
    expect(nextState).toBe(VisibilityFiltersOptions.SHOW_ALL);
  });
});

import { SET_VISIBILITY_FILTER, TEST_DEFAULT_ACTION, VisibilityFiltersOptions } from 'constants/actionTypes';
import visibilityFilter from 'reducers/visibilityFilter';
import { IActionsFilter, IActionTestDefault, IVisibilityFilterOption } from 'types';

describe('[Reducers] visibilityFilter test', () => {
  const state: IVisibilityFilterOption = VisibilityFiltersOptions.SHOW_ALL;
  const actionShowAll: IActionsFilter = {
    type: SET_VISIBILITY_FILTER,
    filter: VisibilityFiltersOptions.SHOW_ALL,
  };
  const actionShowActive: IActionsFilter = {
    type: SET_VISIBILITY_FILTER,
    filter: VisibilityFiltersOptions.SHOW_ACTIVE,
  };
  const actionShowCompleted: IActionsFilter = {
    type: SET_VISIBILITY_FILTER,
    filter: VisibilityFiltersOptions.SHOW_COMPLETED,
  };
  const actionTestDefault: IActionTestDefault = {
    type: TEST_DEFAULT_ACTION,
  };

  it('[visibilityFilter.SET_VISIBILITY_FILTER] should return state with corresponding filter', () => {
    expect(state).toBe(VisibilityFiltersOptions.SHOW_ALL);

    const state1 = visibilityFilter(state, actionShowCompleted);
    expect(state1).toBe(VisibilityFiltersOptions.SHOW_COMPLETED);

    const state2 = visibilityFilter(state1, actionShowActive);
    expect(state2).toBe(VisibilityFiltersOptions.SHOW_ACTIVE);

    const state3 = visibilityFilter(state2, actionShowAll);
    expect(state3).toBe(VisibilityFiltersOptions.SHOW_ALL);
  });

  it('[visibilityFilter.DEFAULT_ACTION] should return previous state if action is not found', () => {
    const state1 = visibilityFilter(state, actionShowCompleted);
    expect(state1).toBe(VisibilityFiltersOptions.SHOW_COMPLETED);
    const state2 = visibilityFilter(state1, actionTestDefault);
    expect(state2).toBe(VisibilityFiltersOptions.SHOW_COMPLETED);

    const state3 = visibilityFilter(state2, actionShowActive);
    expect(state3).toBe(VisibilityFiltersOptions.SHOW_ACTIVE);
    const state4 = visibilityFilter(state3, actionTestDefault);
    expect(state4).toBe(VisibilityFiltersOptions.SHOW_ACTIVE);

    const state5 = visibilityFilter(state4, actionShowAll);
    expect(state5).toBe(VisibilityFiltersOptions.SHOW_ALL);
    const state6 = visibilityFilter(state5, actionTestDefault);
    expect(state6).toBe(VisibilityFiltersOptions.SHOW_ALL);
  });

  it('[visibilityFilter.DEFAULT_STATE] should use default state if not defined', () => {
    const state1 = visibilityFilter(undefined, actionTestDefault);
    expect(state1).toBe(VisibilityFiltersOptions.SHOW_ALL);
  });
});

import { SET_VISIBILITY_FILTER, TEST_DEFAULT_ACTION } from 'constants/actions';
import { VisibilityFiltersOptions } from 'constants/visibilityFilers';
import { visibilityFilter } from 'reducers/visibilityFilter';
import { IActionsFilter, IActionTestDefault, IVisibilityFilterOption } from 'types';

describe('[Reducers] visibilityFilter test', () => {
  const initialState: IVisibilityFilterOption = VisibilityFiltersOptions.SHOW_ALL;
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

  beforeEach(() => {
    expect(initialState).toBe(VisibilityFiltersOptions.SHOW_ALL);
  });

  it('[visibilityFilter.SET_VISIBILITY_FILTER] should return state with corresponding filter', () => {
    const stateShowCompleted = visibilityFilter(initialState, actionShowCompleted);
    expect(stateShowCompleted).toBe(VisibilityFiltersOptions.SHOW_COMPLETED);

    const stateShowActive = visibilityFilter(stateShowCompleted, actionShowActive);
    expect(stateShowActive).toBe(VisibilityFiltersOptions.SHOW_ACTIVE);

    const stateShowAll = visibilityFilter(stateShowActive, actionShowAll);
    expect(stateShowAll).toBe(VisibilityFiltersOptions.SHOW_ALL);
  });

  it('[visibilityFilter.DEFAULT_ACTION] should return previous state if action is not found', () => {
    const stateShowCompleted = visibilityFilter(initialState, actionShowCompleted);
    expect(stateShowCompleted).toBe(VisibilityFiltersOptions.SHOW_COMPLETED);
    const stateTestDefault = visibilityFilter(stateShowCompleted, actionTestDefault);
    expect(stateTestDefault).toBe(VisibilityFiltersOptions.SHOW_COMPLETED);
  });

  it('[visibilityFilter.DEFAULT_ACTION] should return previous state if action is not found', () => {
    const stateShowActive = visibilityFilter(initialState, actionShowActive);
    expect(stateShowActive).toBe(VisibilityFiltersOptions.SHOW_ACTIVE);
    const stateTestDefault = visibilityFilter(stateShowActive, actionTestDefault);
    expect(stateTestDefault).toBe(VisibilityFiltersOptions.SHOW_ACTIVE);
  });

  it('[visibilityFilter.DEFAULT_ACTION] should return previous state if action is not found', () => {
    const stateShowAll = visibilityFilter(initialState, actionShowAll);
    expect(stateShowAll).toBe(VisibilityFiltersOptions.SHOW_ALL);
    const stateTestDefault = visibilityFilter(stateShowAll, actionTestDefault);
    expect(stateTestDefault).toBe(VisibilityFiltersOptions.SHOW_ALL);
  });

  it('[visibilityFilter.DEFAULT_STATE] should use default state if not defined', () => {
    const stateTestDefault = visibilityFilter(undefined, actionTestDefault);
    expect(stateTestDefault).toBe(VisibilityFiltersOptions.SHOW_ALL);
  });
});

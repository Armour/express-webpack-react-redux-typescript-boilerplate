import { SET_VISIBILITY_FILTER, VisibilityFiltersOptions } from 'constants/actionTypes';
import { IActionsFilter, IVisibilityFilterOptions } from 'types';

const initialVisibilityFilter: IVisibilityFilterOptions = VisibilityFiltersOptions.SHOW_ALL;

const visibilityFilter = (state: IVisibilityFilterOptions = initialVisibilityFilter, action: IActionsFilter): IVisibilityFilterOptions => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;

import { SET_VISIBILITY_FILTER } from 'constants/actions';
import { VisibilityFiltersOptions } from 'constants/visibilityFilers';
import { IActionsFilter, IVisibilityFilterOption } from 'types';

const initialState: IVisibilityFilterOption = VisibilityFiltersOptions.SHOW_ALL;

export const visibilityFilter = (state = initialState, action: IActionsFilter): IVisibilityFilterOption => {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
};

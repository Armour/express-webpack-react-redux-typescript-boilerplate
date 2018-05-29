import { getIn, Set } from 'immutable';

import { RECEIVE_RESPONSE, START_REQUEST } from 'constants/actions';
import { IActionsFetchApi, IAppState, IFetchingSet } from 'types';

// store fetching urls and received error
const initialState: IFetchingSet = Set<string>();

export const fetching = (state = initialState, action: IActionsFetchApi): IFetchingSet => {
  switch (action.type) {
  case START_REQUEST:
    return state.add(`${action.method} ${action.url}`);
  case RECEIVE_RESPONSE:
    return state.delete(`${action.method} ${action.url}`);
  default:
    return state;
  }
};

export const isFetching = (url: string, method: string, state: IAppState) => getIn(state, ['fetching', `${method} ${url}`], false) === true;

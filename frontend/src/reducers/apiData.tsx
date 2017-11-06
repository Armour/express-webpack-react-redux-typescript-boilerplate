import Immutable from 'immutable';

import { RECEIVE_ERROR, RECEIVE_RESPONSE, START_REQUEST } from 'constants/actionTypes';
import { IActionsAsyncApi, IApiData, IApiDataMap } from 'types';

const initialState: IApiDataMap = Immutable.Map<string, IApiData>();

export const apiData = (state = initialState, action: IActionsAsyncApi): IApiDataMap => {
  switch (action.type) {
  case START_REQUEST:
    return state.set(action.url, {
      content: 'loading...',
      isFetching: true,
      hasError: false,
    });
  case RECEIVE_RESPONSE:
    return state.set(action.url, {
      content: action.res,
      isFetching: false,
      hasError: false,
    });
  case RECEIVE_ERROR:
    return state.set(action.url, {
      content: action.error,
      isFetching: false,
      hasError: true,
    });
  default:
    return state;
  }
};

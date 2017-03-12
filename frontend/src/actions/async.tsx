import { Dispatch } from 'react-redux';

import { RECEIVE_ERROR, RECEIVE_RESPONSE, START_REQUEST } from 'constants/actionTypes';
import { IActionReceiveError, IActionReceiveResponse, IActionStartRequest, IAsyncApiCallState } from 'types';

export const startRequest = (url: string): IActionStartRequest => {
  return {
    type: START_REQUEST,
    url,
  };
};

export const receiveResponse = (url: string, res: string): IActionReceiveResponse => {
  return {
    type: RECEIVE_RESPONSE,
    url,
    res,
  };
};

export const receiveError = (url: string, error: string): IActionReceiveError => {
  return {
    type: RECEIVE_ERROR,
    url,
    error,
  };
};

const fetchApiData = (url: string) => {
  return async (dispatch: Dispatch<IAsyncApiCallState>) => {
    dispatch(startRequest(url));
    try {
      const res: Response = await fetch(`http://localhost:3003/${url}`, { method: 'POST' });
      if (res.ok) {
        const content = JSON.stringify(res.json());
        dispatch(receiveResponse(url, content));
      } else {
        dispatch(receiveError(url, `${res.status} ${res.statusText}`));
      }
    } catch (e) {
      dispatch(receiveError(url, e.message));
    }
  };
};

const shouldFetchApiData = (state: IAsyncApiCallState, url: string): boolean => {
  const apiData = state.apiData.get(url);
  return !apiData || !apiData.isFetching;
};

export const fetchApiDataIfNeeded = (url: string) => {
  return (dispatch: Dispatch<IAsyncApiCallState>, getState: () => IAsyncApiCallState) => {
    if (shouldFetchApiData(getState(), url)) {
      return dispatch(fetchApiData(url));
    }
  };
};

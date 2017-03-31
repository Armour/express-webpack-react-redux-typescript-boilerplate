import { Dispatch } from 'react-redux';

import { RECEIVE_ERROR, RECEIVE_RESPONSE, START_REQUEST } from 'constants/actionTypes';
import { FETCH_API_DOMAIN_NAME, FETCH_API_HTTP_PORT } from 'constants/fetchApi';
import { IActionReceiveError, IActionReceiveResponse, IActionStartRequest, IAsyncApiCallState } from 'types';

export const startRequest = (url: string): IActionStartRequest => {
  return {
    type: START_REQUEST,
    url,
  };
};

export const receiveResponse = (url: string, res: any): IActionReceiveResponse => {
  alert(`Post: ${url}\nResponse: ${JSON.stringify(res)}`);
  return {
    type: RECEIVE_RESPONSE,
    url,
    res,
  };
};

export const receiveError = (url: string, error: string): IActionReceiveError => {
  alert(`Post: ${url}\nResponse: ${error}`);
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
      const req = new Request(`http://${FETCH_API_DOMAIN_NAME}:${FETCH_API_HTTP_PORT}/${url}`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
      const res: Response = await fetch(req);
      if (res.ok) {
        res.json().then(data => {
          dispatch(receiveResponse(url, data));
        });
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

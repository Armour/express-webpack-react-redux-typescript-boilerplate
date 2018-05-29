import { Dispatch } from 'react-redux';

import { DEFAULT_RECEIVE_ERROR, RECEIVE_RESPONSE, START_REQUEST } from 'constants/actions';
import { METHOD_POST } from 'constants/requestMethods';
import { isFetching } from 'reducers/fetching';
import { IActionDefaultReceiveError, IActionReceiveResponse, IActionStartRequest, IAppState } from 'types';

export const startRequest = (url: string, method: string): IActionStartRequest => ({
  type: START_REQUEST,
  url,
  method,
});

export const receiveResponse = (url: string, method: string): IActionReceiveResponse => ({
  type: RECEIVE_RESPONSE,
  url,
  method,
});

export const defaultReceiveError = (url: string, error: string): IActionDefaultReceiveError => ({
  type: DEFAULT_RECEIVE_ERROR,
  url,
  error,
});

/*
  redux-thunk middleware allows us to write action creators that return a function instead of an action
  detail see: https://github.com/gaearon/redux-thunk
*/
const fetchData = (url: string, method: string, postData: any, receiveData: any, receiveError: any) =>
async (dispatch: Dispatch<IAppState>) => {
  dispatch(startRequest(url, method));
  try {
    let req;
    if (method.toUpperCase() === METHOD_POST) {
      const headers: Headers = new Headers();
      headers.append('Content-Type', 'application/json');
      req = new Request(`/api/${url}`, {
        method: METHOD_POST,
        headers,
        body: JSON.stringify(postData),
        credentials: 'same-origin',
      });
    } else {
      req = new Request(`/api/${url}`, {
        method,
        credentials: 'same-origin',
      });
    }
    const res = await fetch(req);
    if (res.ok) {
      res.json().then((data) => {
        dispatch(receiveData(data));
      }).catch(() => {
        dispatch(receiveData()); // no content
      });
    } else {
      res.json().then((e) => {
        dispatch(receiveError(url, `${res.status} ${e.message}`));
      });
    }
  } catch (e) {
    dispatch(receiveError(url, e.message));
  } finally {
    dispatch(receiveResponse(url, method));
  }
};

/*
  fetchDataIfNeeded prevents duplicate fetch request to same url at the same time
*/
export const fetchDataIfNeeded = (url: string, method: string, postData: any, receiveData: any, receiveError = defaultReceiveError) =>
  (dispatch: Dispatch<IAppState>, getState: () => IAppState) => {
    if (!isFetching(url, method, getState())) {
      return dispatch(fetchData(url, method, postData, receiveData, receiveError));
    }
    return null;
  };

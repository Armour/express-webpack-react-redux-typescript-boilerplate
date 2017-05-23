import Immutable from 'immutable';

import { RECEIVE_ERROR, RECEIVE_RESPONSE, START_REQUEST, TEST_DEFAULT_ACTION } from 'constants/actionTypes';
import { apiData } from 'reducers/apiData';
import { IActionReceiveError, IActionReceiveResponse, IActionStartRequest, IActionTestDefault, IApiData, IApiDataMap } from 'types';

describe('[Reducers] apiData test', () => {
  const state: IApiDataMap = Immutable.Map<string, IApiData>();
  const actionStartRequest: IActionStartRequest = {
    type: START_REQUEST,
    url: 'test_url',
  };
  const actionReceiveResponse: IActionReceiveResponse = {
    type: RECEIVE_RESPONSE,
    url: 'test_url',
    res: 'response_data',
  };
  const actionReceiveError: IActionReceiveError = {
    type: RECEIVE_ERROR,
    url: 'test_url',
    error: 'error_msg',
  };
  const actionTestDefault: IActionTestDefault = {
    type: TEST_DEFAULT_ACTION,
  };

  it('[apiData.START_REQUEST] should return state with url fetching started', () => {
    expect(state.count()).toBe(0);
    const nextState = apiData(state, actionStartRequest);
    expect(nextState.count()).toBe(1);
    expect(nextState).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'loading...',
          isFetching: true,
          hasError: false,
        },
      ],
    ]));
  });

  it('[apiData.RECEIVE_RESPONSE] should return state with response data fetched', () => {
    expect(state.count()).toBe(0);
    const state1 = apiData(state, actionStartRequest);
    expect(state1.count()).toBe(1);
    expect(state1).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'loading...',
          isFetching: true,
          hasError: false,
        },
      ],
    ]));
    const state2 = apiData(state1, actionReceiveResponse);
    expect(state2.count()).toBe(1);
    expect(state2).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'response_data',
          isFetching: false,
          hasError: false,
        },
      ],
    ]));
  });

  it('[apiData.RECEIVE_ERROR] should return state with error message fetched', () => {
    expect(state.count()).toBe(0);
    const state1 = apiData(state, actionStartRequest);
    expect(state1.count()).toBe(1);
    expect(state1).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'loading...',
          isFetching: true,
          hasError: false,
        },
      ],
    ]));
    const state2 = apiData(state1, actionReceiveError);
    expect(state2.count()).toBe(1);
    expect(state2).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'error_msg',
          isFetching: false,
          hasError: true,
        },
      ],
    ]));
  });

  it('[apiData.DEFAULT_ACTION] should return previous state if action is not found', () => {
    expect(state.count()).toBe(0);

    const state1 = apiData(state, actionStartRequest);
    expect(state1.count()).toBe(1);
    expect(state1).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'loading...',
          isFetching: true,
          hasError: false,
        },
      ],
    ]));
    const state2 = apiData(state1, actionTestDefault);
    expect(state2.count()).toBe(1);
    expect(state2).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'loading...',
          isFetching: true,
          hasError: false,
        },
      ],
    ]));

    const state3 = apiData(state, actionReceiveResponse);
    expect(state3.count()).toBe(1);
    expect(state3).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'response_data',
          isFetching: false,
          hasError: false,
        },
      ],
    ]));
    const state4 = apiData(state3, actionTestDefault);
    expect(state4.count()).toBe(1);
    expect(state4).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'response_data',
          isFetching: false,
          hasError: false,
        },
      ],
    ]));

    const state5 = apiData(state, actionReceiveError);
    expect(state5.count()).toBe(1);
    expect(state5).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'error_msg',
          isFetching: false,
          hasError: true,
        },
      ],
    ]));
    const state6 = apiData(state5, actionTestDefault);
    expect(state6.count()).toBe(1);
    expect(state6).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'error_msg',
          isFetching: false,
          hasError: true,
        },
      ],
    ]));
  });

  it('[apiData.DEFAULT_STATE] should use default state if not defined', () => {
    expect(state.count()).toBe(0);
    const nextState = apiData(undefined, actionTestDefault);
    expect(nextState.count()).toBe(0);
  });
});

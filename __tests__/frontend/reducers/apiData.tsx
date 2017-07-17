import Immutable from 'immutable';

import { RECEIVE_ERROR, RECEIVE_RESPONSE, START_REQUEST, TEST_DEFAULT_ACTION } from 'constants/actionTypes';
import { apiData } from 'reducers/apiData';
import { IActionReceiveError, IActionReceiveResponse, IActionStartRequest, IActionTestDefault, IApiData, IApiDataMap } from 'types';

describe('[Reducers] apiData test', () => {
  const initialState: IApiDataMap = Immutable.Map<string, IApiData>();
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

  beforeEach(() => {
    expect(initialState.count()).toBe(0);
  });

  it('[apiData.START_REQUEST] should return state with url fetching started', () => {
    const stateStartRequest = apiData(initialState, actionStartRequest);
    expect(stateStartRequest.count()).toBe(1);
    expect(stateStartRequest).toEqual(Immutable.Map<string, IApiData>([
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
    const stateStartRequest = apiData(initialState, actionStartRequest);
    expect(stateStartRequest.count()).toBe(1);
    expect(stateStartRequest).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'loading...',
          isFetching: true,
          hasError: false,
        },
      ],
    ]));

    const stateReceiveResponse = apiData(stateStartRequest, actionReceiveResponse);
    expect(stateReceiveResponse.count()).toBe(1);
    expect(stateReceiveResponse).toEqual(Immutable.Map<string, IApiData>([
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
    const stateStartRequest = apiData(initialState, actionStartRequest);
    expect(stateStartRequest.count()).toBe(1);
    expect(stateStartRequest).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'loading...',
          isFetching: true,
          hasError: false,
        },
      ],
    ]));

    const stateReceiveError = apiData(stateStartRequest, actionReceiveError);
    expect(stateReceiveError.count()).toBe(1);
    expect(stateReceiveError).toEqual(Immutable.Map<string, IApiData>([
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
    const stateStartRequest = apiData(initialState, actionStartRequest);
    expect(stateStartRequest.count()).toBe(1);
    expect(stateStartRequest).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'loading...',
          isFetching: true,
          hasError: false,
        },
      ],
    ]));

    const stateTestDefault = apiData(stateStartRequest, actionTestDefault);
    expect(stateTestDefault.count()).toBe(1);
    expect(stateTestDefault).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'loading...',
          isFetching: true,
          hasError: false,
        },
      ],
    ]));
  });

  it('[apiData.DEFAULT_ACTION] should return previous state if action is not found', () => {
    const stateReceiveResponse = apiData(initialState, actionReceiveResponse);
    expect(stateReceiveResponse.count()).toBe(1);
    expect(stateReceiveResponse).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'response_data',
          isFetching: false,
          hasError: false,
        },
      ],
    ]));

    const stateTestDefault = apiData(stateReceiveResponse, actionTestDefault);
    expect(stateTestDefault.count()).toBe(1);
    expect(stateTestDefault).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'response_data',
          isFetching: false,
          hasError: false,
        },
      ],
    ]));
  });

  it('[apiData.DEFAULT_ACTION] should return previous state if action is not found', () => {
    const stateReceiveError = apiData(initialState, actionReceiveError);
    expect(stateReceiveError.count()).toBe(1);
    expect(stateReceiveError).toEqual(Immutable.Map<string, IApiData>([
      [
        'test_url', {
          content: 'error_msg',
          isFetching: false,
          hasError: true,
        },
      ],
    ]));

    const stateTestDefault = apiData(stateReceiveError, actionTestDefault);
    expect(stateTestDefault.count()).toBe(1);
    expect(stateTestDefault).toEqual(Immutable.Map<string, IApiData>([
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
    const stateTestDefault = apiData(undefined, actionTestDefault);
    expect(stateTestDefault.count()).toBe(0);
  });
});

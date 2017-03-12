// Todo action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Visibility action types
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// Visibility filter options
export const VisibilityFiltersOptions = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

// Async fetch request states
export const START_REQUEST = 'START_REQUEST';
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

// For coverage test
export const TEST_DEFAULT_ACTION = 'TEST_DEFAULT_ACTION';

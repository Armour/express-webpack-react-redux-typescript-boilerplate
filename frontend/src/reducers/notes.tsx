import { Map } from 'immutable';

import { RECEIVE_NOTE } from 'constants/actions';
import { IActionsFetchNote, INoteData, INoteDataMap } from 'types';

const initialState: INoteDataMap = Map<string, INoteData>();

export const notes = (state = initialState, action: IActionsFetchNote) => {
  const newState = state;
  switch (action.type) {
  case RECEIVE_NOTE:
    // if (action.data.content) {
    //   newState = newState.mergeIn([value.id], fromJS(content));
    // }
    return newState;
  default:
    return state;
  }
};

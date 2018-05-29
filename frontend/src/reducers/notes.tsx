import { fromJS, List } from 'immutable';

import { RECEIVE_NOTE } from 'constants/actions';
import { IActionsFetchNote, INote, INoteList } from 'types';

const initialState: INoteList = List<INote>();

export const notes = (state = initialState, action: IActionsFetchNote) => {
  switch (action.type) {
  case RECEIVE_NOTE:
    return fromJS(action.data.notes);
  default:
    return state;
  }
};

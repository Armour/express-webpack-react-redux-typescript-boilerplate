import { AnyAction, Dispatch } from 'redux';

import { fetchDataIfNeeded } from 'actions/fetchApi';
import { RECEIVE_NOTE } from 'constants/actions';
import { METHOD_GET } from 'constants/requestMethods';

const receiveNote = (data: any) => ({
  type: RECEIVE_NOTE,
  data,
});

export const fetchNoteIfNeeded = (url: string) =>
  (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchDataIfNeeded(url, METHOD_GET, {}, receiveNote) as any);
  };

import { Dispatch } from 'react-redux';

import { fetchDataIfNeeded } from 'actions/fetchApi';
import { RECEIVE_NOTE } from 'constants/actions';
import { METHOD_GET } from 'constants/requestMethods';
import { IAppState } from 'types';

const receiveNote = (data: any) => ({
  type: RECEIVE_NOTE,
  data,
});

export const fetchNoteIfNeeded = (url: string) =>
  (dispatch: Dispatch<IAppState>) => {
    dispatch(fetchDataIfNeeded(url, METHOD_GET, {}, receiveNote));
  };

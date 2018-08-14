import { List } from 'immutable';

import { FETCH_ALL_NOTES_FAILURE, FETCH_ALL_NOTES_REQUESTED, FETCH_ALL_NOTES_SUCCESS } from './constants';
import { IActionsNotes, INote, INotesState } from './types';

const initialState: INotesState = {
  notes: List<INote>(),
  loading: false,
  error: '',
};

export default (state = initialState, action: IActionsNotes): INotesState => {
  switch (action.type) {
    case FETCH_ALL_NOTES_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_NOTES_SUCCESS:
      const noteList: INote[] = [];
      action.payload.data.notes.forEach((note: INote) => {
        noteList.push({
          id: note.id,
          content: note.content,
        });
      });
      return {
        notes: List(noteList),
        loading: false,
        error: '',
      };
    case FETCH_ALL_NOTES_FAILURE:
      return {
        notes: List<INote>(),
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

import { List, Record } from 'immutable';

import { FETCH_ALL_NOTES_FAILURE, FETCH_ALL_NOTES_REQUESTED, FETCH_ALL_NOTES_SUCCESS } from './constants';
import { IActionsNotes, INote, INotesState, INotesStateRecord } from './types';

export const getNotesStateRecord = (state: INotesState): INotesStateRecord => {
  class NotesStateRecord extends Record(state) implements INotesStateRecord {}
  return new NotesStateRecord();
};

const initialState = getNotesStateRecord({
  notes: List<INote>(),
  loading: false,
  error: '',
});

export default (state: INotesStateRecord = initialState, action: IActionsNotes): INotesStateRecord => {
  switch (action.type) {
    case FETCH_ALL_NOTES_REQUESTED:
      return state.set('loading', true);
    case FETCH_ALL_NOTES_SUCCESS:
      const noteList: INote[] = [];
      action.payload.data.notes.forEach((note: INote) => {
        noteList.push({
          id: note.id,
          content: note.content,
        });
      });
      return state.clear().set('notes', List(noteList));
    case FETCH_ALL_NOTES_FAILURE:
      return state.clear().set('error', action.payload.error);
    default:
      return state;
  }
};

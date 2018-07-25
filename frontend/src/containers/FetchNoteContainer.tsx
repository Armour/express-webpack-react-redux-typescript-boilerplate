import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { FetchNote, IFetchNoteDispatchProps, IFetchNoteStateProps } from 'components/FetchNote';
import { ADD_NOTE_REQUESTED, EDIT_NOTE_REQUESTED, FETCH_ALL_NOTES_REQUESTED, FETCH_NOTE_REQUESTED, REMOVE_NOTE_REQUESTED } from 'constants/actions';
import { IGlobalState } from 'types';

const mapStateToProps = (state: IGlobalState): IFetchNoteStateProps => ({
  notes: state.notesState.notes,
  loading: state.notesState.loading,
  error: state.notesState.error,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IFetchNoteDispatchProps => ({
  fetchAllNotes: () => {
    dispatch({ type: FETCH_ALL_NOTES_REQUESTED, payload: {} });
  },
  fetchNote: (id: number) => {
    dispatch({ type: FETCH_NOTE_REQUESTED, payload: { id } });
  },
  addNote: (content: string) => {
    dispatch({ type: ADD_NOTE_REQUESTED, payload: { content } });
  },
  editNote: (id: number, content: string) => {
    dispatch({ type: EDIT_NOTE_REQUESTED, payload: { id, content } });
  },
  removeNote: (id: number) => {
    dispatch({ type: REMOVE_NOTE_REQUESTED, payload: { id } });
  },
});

export const FetchNoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FetchNote);

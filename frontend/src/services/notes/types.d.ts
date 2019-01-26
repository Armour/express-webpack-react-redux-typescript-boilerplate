import { List, Record } from 'immutable';

import { ADD_NOTE_FAILURE, ADD_NOTE_REQUESTED, ADD_NOTE_SUCCESS, EDIT_NOTE_FAILURE, EDIT_NOTE_REQUESTED, EDIT_NOTE_SUCCESS, FETCH_ALL_NOTES_FAILURE, FETCH_ALL_NOTES_REQUESTED, FETCH_ALL_NOTES_SUCCESS, FETCH_NOTE_FAILURE, FETCH_NOTE_REQUESTED, FETCH_NOTE_SUCCESS, REMOVE_NOTE_FAILURE, REMOVE_NOTE_REQUESTED, REMOVE_NOTE_SUCCESS } from './constants';

// Notes state
export interface INotesState {
  notes: List<INote>;
  loading: boolean;
  error: string;
}
export interface INote {
  id: number;
  content: string;
}
export interface INotesStateRecord extends Record<INotesState>, INotesState {}

// Notes actions
export interface IActionFetchAllNotesRequested {
  type: typeof FETCH_ALL_NOTES_REQUESTED;
  payload: {};
}
export interface IActionFetchAllNotesSuccess {
  type: typeof FETCH_ALL_NOTES_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionFetchAllNotesFailure {
  type: typeof FETCH_ALL_NOTES_FAILURE;
  payload: {
    error: string,
  };
}

export interface IActionFetchNoteRequested {
  type: typeof FETCH_NOTE_REQUESTED;
  payload: {
    id: number,
  };
}
export interface IActionFetchNoteSuccess {
  type: typeof FETCH_NOTE_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionFetchNoteFailure {
  type: typeof FETCH_NOTE_FAILURE;
  payload: {
    error: string,
  };
}

export interface IActionAddNoteRequested {
  type: typeof ADD_NOTE_REQUESTED;
  payload: {
    content: string,
  };
}
export interface IActionAddNoteSuccess {
  type: typeof ADD_NOTE_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionAddNoteFailure {
  type: typeof ADD_NOTE_FAILURE;
  payload: {
    error: string,
  };
}

export interface IActionEditNoteRequested {
  type: typeof EDIT_NOTE_REQUESTED;
  payload: {
    id: number,
    content: string,
  };
}
export interface IActionEditNoteSuccess {
  type: typeof EDIT_NOTE_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionEditNoteFailure {
  type: typeof EDIT_NOTE_FAILURE;
  payload: {
    error: string,
  };
}

export interface IActionRemoveNoteRequested {
  type: typeof REMOVE_NOTE_REQUESTED;
  payload: {
    id: number,
  };
}
export interface IActionRemoveNoteSuccess {
  type: typeof REMOVE_NOTE_SUCCESS;
  payload: {
    data: any,
  };
}
export interface IActionRemoveNoteFailure {
  type: typeof REMOVE_NOTE_FAILURE;
  payload: {
    error: string,
  };
}

export type IActionsNotes
  = IActionFetchAllNotesRequested
  | IActionFetchAllNotesSuccess
  | IActionFetchAllNotesFailure
  | IActionFetchNoteRequested
  | IActionFetchNoteSuccess
  | IActionFetchNoteFailure
  | IActionAddNoteRequested
  | IActionAddNoteSuccess
  | IActionAddNoteFailure
  | IActionEditNoteRequested
  | IActionEditNoteSuccess
  | IActionEditNoteFailure
  | IActionRemoveNoteRequested
  | IActionRemoveNoteSuccess
  | IActionRemoveNoteFailure;

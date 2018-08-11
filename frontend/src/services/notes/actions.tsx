import {ADD_NOTE_REQUESTED, EDIT_NOTE_REQUESTED, FETCH_ALL_NOTES_REQUESTED, FETCH_NOTE_REQUESTED, REMOVE_NOTE_REQUESTED } from './constants';
import { IActionAddNoteRequested, IActionEditNoteRequested, IActionFetchAllNotesRequested, IActionFetchNoteRequested, IActionRemoveNoteRequested } from './types';

export const fetchAllNotes = (payload: IActionFetchAllNotesRequested['payload']): IActionFetchAllNotesRequested => ({
  type: FETCH_ALL_NOTES_REQUESTED,
  payload,
});

export const fetchNote = (payload: IActionFetchNoteRequested['payload']): IActionFetchNoteRequested => ({
  type: FETCH_NOTE_REQUESTED,
  payload,
});

export const editNote = (payload: IActionEditNoteRequested['payload']): IActionEditNoteRequested => ({
  type: EDIT_NOTE_REQUESTED,
  payload,
});

export const addNote = (payload: IActionAddNoteRequested['payload']): IActionAddNoteRequested => ({
  type: ADD_NOTE_REQUESTED,
  payload,
});

export const removeNote = (payload: IActionRemoveNoteRequested['payload']): IActionRemoveNoteRequested => ({
  type: REMOVE_NOTE_REQUESTED,
  payload,
});

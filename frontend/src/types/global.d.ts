import { RouterState } from 'connected-react-router/immutable';
import { Record } from 'immutable';

import { INotesState, INotesStateRecord } from 'services/notes/types';
import { ITodosState, ITodosStateRecord } from 'services/todos/types';

// Global state
export interface IGlobalState {
  todosState: ITodosStateRecord;
  notesState: INotesStateRecord;
  router: RouterState;
}
export interface IGlobalStateRecord extends Record<IGlobalState>, IGlobalState {}

// Interface for async call steps
export interface IAsyncCall {
  REQUESTED: string;
  SUCCESS: string;
  FAILURE: string;
}

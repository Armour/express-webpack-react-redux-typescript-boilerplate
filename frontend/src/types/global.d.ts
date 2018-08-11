import { RouterState } from 'connected-react-router';

import { INotesState } from 'services/notes/types';
import { ITodosState } from 'services/todos/types';

// Global state
export interface IGlobalState {
  todosState: ITodosState;
  notesState: INotesState;
  router?: RouterState;
}

// Interface for async call steps
export interface IAsyncCall {
  REQUESTED: string;
  SUCCESS: string;
  FAILURE: string;
}

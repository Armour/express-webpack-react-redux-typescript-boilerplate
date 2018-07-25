import { RouterState } from 'connected-react-router';

import { INotesState } from './notes';
import { ITodosState } from './todos';

// Global state
export interface IGlobalState {
  todosState: ITodosState;
  notesState: INotesState;
  router?: RouterState;
}

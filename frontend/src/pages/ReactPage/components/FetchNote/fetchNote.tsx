import { List } from 'immutable';
import React from 'react';
import { Translation } from 'react-i18next';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { ADD_NOTE_REQUESTED, EDIT_NOTE_REQUESTED, FETCH_ALL_NOTES_REQUESTED, FETCH_NOTE_REQUESTED, REMOVE_NOTE_REQUESTED } from 'services/notes/constants';
import { INote } from 'services/notes/types';
import { IGlobalStateRecord } from 'types/global';

const styles = require('./fetchNote.scss');

// Component

interface IFetchNoteStateProps {
  notes: List<INote>;
  loading: boolean;
  error: string;
}

interface IFetchNoteDispatchProps {
  fetchAllNotes(): void;
  fetchNote(id: number): void;
  addNote(content: string): void;
  editNote(id: number, content: string): void;
  removeNote(id: number): void;
}

interface IFetchNoteProps extends IFetchNoteStateProps, IFetchNoteDispatchProps { }

export class FetchNote extends React.Component<IFetchNoteProps> {
  public fetchAllNotes = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.props.fetchAllNotes();
  }

  public render() {
    const noteList = this.props.notes.map((note) =>
      (
        <li className='collection-item'>
          <div>Id: {note.id} &emsp; Content: {note.content}</div>
        </li>
      ),
    );
    const noteListCollection = <ul className={`collection ${styles['fetch-note-collection']}`}> {noteList} </ul>;
    const errorPanel = (
      <div className={`card-panel red ${styles['fetch-note-error-panel']}`}>
        <span className='white-text'>{this.props.error}</span>
      </div>
    );
    return (
      <Translation ns='reactPage'>
        {(t) => (
          <div className={`center-align z-depth-2 ${styles['fetch-note-layout']}`}>
            <span className={styles['fetch-note-title']}>{t('fetchNote.asyncCalls')}</span>
            <div className='fetchAllNotes'>
              <a className={`btn waves-effect ${styles['fetch-note-filter-btn']}`} onClick={this.fetchAllNotes} role='button'>
                {t('fetchNote.fetchAllNotes')}
              </a>
            </div>
            {noteList.count() > 0 && noteListCollection}
            {this.props.error !== '' && errorPanel}
          </div>
        )}
      </Translation>
    );
  }
}

// Container

const mapStateToProps = (state: IGlobalStateRecord): IFetchNoteStateProps => ({
    notes: state.get('notesState').notes,
    loading: state.get('notesState').loading,
    error: state.get('notesState').error,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FetchNote);

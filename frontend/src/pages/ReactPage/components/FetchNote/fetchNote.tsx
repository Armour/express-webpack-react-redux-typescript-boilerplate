import { List } from 'immutable';
import * as React from 'react';
import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { ADD_NOTE_REQUESTED, EDIT_NOTE_REQUESTED, FETCH_ALL_NOTES_REQUESTED, FETCH_NOTE_REQUESTED, REMOVE_NOTE_REQUESTED } from 'services/notes/constants';
import { INote } from 'services/notes/types';
import { IGlobalState } from 'types/global';
import i18ns from './i18n';

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

interface IFetchNoteProps extends IFetchNoteStateProps, IFetchNoteDispatchProps, InjectedI18nProps,  InjectedTranslateProps { }

export class FetchNote extends React.Component<IFetchNoteProps> {
  constructor(props: IFetchNoteProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'FetchNote', i18ns[key]);
    });
  }

  public fetchAllNotes = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.fetchAllNotes();
  }

  public render() {
    const { t } = this.props;
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
      <div className={`center-align z-depth-2 ${styles['fetch-note-layout']}`}>
        <span className={styles['fetch-note-title']}>{t('async-calls')}</span>
        <div className='fetch-all-notes'>
          <a className={`btn waves-effect ${styles['fetch-note-filter-btn']}`} onClick={this.fetchAllNotes} role='button'>{t('fetch-all-notes')}</a>
        </div>
        {noteList.count() > 0 && noteListCollection}
        {this.props.error !== '' && errorPanel}
      </div>
    );
  }
}

// Container

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate('FetchNote')(FetchNote));

import { List } from 'immutable';

import * as React from 'react';

import { INote } from 'types';

export interface IFetchNoteStateProps {
  notes: List<INote>;
  loading: boolean;
  error: string;
}

export interface IFetchNoteDispatchProps {
  fetchAllNotes(): void;
  fetchNote(id: number): void;
  addNote(content: string): void;
  editNote(id: number, content: string): void;
  removeNote(id: number): void;
}

type IFetchNoteProps = IFetchNoteStateProps & IFetchNoteDispatchProps;

export class FetchNote extends React.Component<IFetchNoteProps> {
  constructor(props: IFetchNoteProps) {
    super(props);
  }

  public fetchAllNotes = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    const noteListCollection = <ul className='collection fetch-note-collection'> {noteList} </ul>;
    const errorPanel = (
      <div className='fetch-note-error-panel card-panel red'>
        <span className='white-text'>{this.props.error}</span>
      </div>
    );
    return (
      <div className='fetch-note-layout center-align z-depth-2'>
        <span className='fetch-note-title'>async calls</span>
        <div className='fetch-all-notes'>
          <a className='btn waves-effect' onClick={this.fetchAllNotes} role='button'>Fetch All Notes</a>
        </div>
        {noteList.count() > 0 && noteListCollection}
        {this.props.error !== '' && errorPanel}
      </div>
    );
  }
}

import React from 'react';

import { INoteDataMap } from 'types';

export interface IApiLoaderStateProps {
  noteData: INoteDataMap;
}

export interface IApiLoaderDispatchProps {
  fetchNoteIfNeeded(url: string): void;
}

type IApiLoaderProps = IApiLoaderStateProps & IApiLoaderDispatchProps;

interface IApiLoaderState {
  url: string;
}

export class NoteFetcher extends React.Component<IApiLoaderProps, IApiLoaderState> {
  constructor(props: IApiLoaderProps) {
    super(props);
    this.state = { url: 'api' };
  }

  public onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!this.state.url.trim()) {
      return;
    }
    this.props.fetchNoteIfNeeded(this.state.url);
  }

  public onChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ url: e.currentTarget.value });
  }

  public render() {
    return (
      <div className='api-loader center-align z-depth-2'>
        <div className='input-field inline'>
          <input id='input-url-api-call' type='text' value={this.state.url} onChange={this.onChange} />
        </div>
        <a className='btn waves-effect' onClick={this.onClick} role='button'>Async Post Api Call</a>
      </div>
    );
  }
}

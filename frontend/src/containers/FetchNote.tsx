import { connect, Dispatch } from 'react-redux';

import { fetchNoteIfNeeded } from 'actions';
import { NoteFetcher } from 'components/FetchNote';
import { IApiLoaderDispatchProps, IApiLoaderStateProps, IAppState } from 'types';

const mapStateToProps = (state: IAppState): IApiLoaderStateProps => ({
  noteData: state.noteData,
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): IApiLoaderDispatchProps => ({
  fetchNoteIfNeeded: (url: string) => {
    dispatch(fetchNoteIfNeeded(url));
  },
});

export const FetchNote = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteFetcher);

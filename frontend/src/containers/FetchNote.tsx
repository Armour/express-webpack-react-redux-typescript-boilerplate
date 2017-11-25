import { connect, Dispatch } from 'react-redux';

import { fetchNoteIfNeeded } from 'actions';
import { NoteFetcher } from 'components/FetchNote';
import { IAppState, INoteFetcherDispatchProps, INoteFetcherStateProps } from 'types';

const mapStateToProps = (state: IAppState): INoteFetcherStateProps => ({
  noteData: state.noteData,
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): INoteFetcherDispatchProps => ({
  fetchNoteIfNeeded: (url: string) => {
    dispatch(fetchNoteIfNeeded(url));
  },
});

export const FetchNote = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteFetcher);

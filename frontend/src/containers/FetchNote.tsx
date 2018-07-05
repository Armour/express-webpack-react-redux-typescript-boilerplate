import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { fetchNoteIfNeeded } from 'actions';
import { NoteFetcher } from 'components/FetchNote';
import { IAppState, INoteFetcherDispatchProps, INoteFetcherStateProps } from 'types';

const mapStateToProps = (state: IAppState): INoteFetcherStateProps => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): INoteFetcherDispatchProps => ({
  fetchNoteIfNeeded: (url: string) => {
    dispatch(fetchNoteIfNeeded(url) as any);
  },
});

export const FetchNote = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteFetcher);

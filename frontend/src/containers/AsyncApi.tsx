import { connect, Dispatch } from 'react-redux';

import { fetchApiDataIfNeeded } from 'actions';
import { ApiLoader } from 'components/ApiLoader';
import { IApiLoaderDispatchProps, IApiLoaderStateProps, IAsyncApiCallState } from 'types';

const mapStateToProps = (state: IAsyncApiCallState): IApiLoaderStateProps => ({
  apiData: state.apiData,
});

const mapDispatchToProps = (dispatch: Dispatch<IAsyncApiCallState>): IApiLoaderDispatchProps => ({
  fetchData: (url: string) => {
    dispatch(fetchApiDataIfNeeded(url));
  },
});

export const AsyncApi = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApiLoader);

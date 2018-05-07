import { connect, Dispatch } from 'react-redux';

import { setVisibilityFilter } from 'actions';
import { ITodoLinkDispatchProps, ITodoLinkStateProps, TodoLink } from 'components/TodoLink';
import { IAppState, IVisibilityFilterOption } from 'types';

export interface IFilterLinkProps {
  filter: IVisibilityFilterOption;
}

const mapStateToProps = (state: IAppState, ownProps: IFilterLinkProps): ITodoLinkStateProps => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>, ownProps: IFilterLinkProps): ITodoLinkDispatchProps => ({
  setVisibilityFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoLink);

import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { setVisibilityFilter } from 'actions';
import { ITodoLinkDispatchProps, ITodoLinkStateProps, TodoLink } from 'components/TodoLink';
import { IAppState, IVisibilityFilterOption } from 'types';

export interface IFilterLinkProps {
  filter: IVisibilityFilterOption;
}

const mapStateToProps = (state: IAppState, ownProps: IFilterLinkProps): ITodoLinkStateProps => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: IFilterLinkProps): ITodoLinkDispatchProps => ({
  setVisibilityFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoLink);

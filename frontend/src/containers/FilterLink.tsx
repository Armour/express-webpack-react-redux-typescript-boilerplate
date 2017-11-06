import { connect, Dispatch } from 'react-redux';

import { setVisibilityFilter } from 'actions';
import { ITodoLinkDispatchProps, ITodoLinkStateProps, TodoLink } from 'components/TodoLink';
import { ITodoAppState,  IVisibilityFilterOption } from 'types';

export interface IFilterLinkProps {
  filter: IVisibilityFilterOption;
}

const mapStateToProps = (state: ITodoAppState, ownProps: IFilterLinkProps): ITodoLinkStateProps => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<ITodoAppState>, ownProps: IFilterLinkProps): ITodoLinkDispatchProps => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoLink);

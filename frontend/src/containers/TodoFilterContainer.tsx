import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { setVisibilityFilter } from 'actions';
import { ITodoFilterDispatchProps, ITodoFilterStateProps, TodoFilter } from 'components/TodoFilter';
import { IGlobalState } from 'types';

interface IFilterLinkProps {
  filter: string;
}

const mapStateToProps = (state: IGlobalState, ownProps: IFilterLinkProps): ITodoFilterStateProps => ({
  active: ownProps.filter === state.todosState.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: IFilterLinkProps): ITodoFilterDispatchProps => ({
  setVisibilityFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export const TodoFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoFilter);

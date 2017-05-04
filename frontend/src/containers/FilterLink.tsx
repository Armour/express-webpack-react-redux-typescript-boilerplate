import { connect, Dispatch } from 'react-redux';

import { setVisibilityFilter } from 'actions';
import TodoLink from 'components/TodoLink';
import { ITodoAppState, ITodoLinkDispatchProps, ITodoLinkStateProps, IVisibilityFilterOption } from 'types';

interface IFilterLinkProps {
  filter: IVisibilityFilterOption;
}

const mapStateToProps = (state: ITodoAppState, ownProps: IFilterLinkProps): ITodoLinkStateProps => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ITodoAppState>, ownProps: IFilterLinkProps): ITodoLinkDispatchProps => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoLink as any);

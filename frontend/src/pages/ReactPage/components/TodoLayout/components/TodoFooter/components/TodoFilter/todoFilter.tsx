import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { setVisibilityFilter } from 'services/todos/actions';
import { IGlobalState } from 'types/global';

const styles = require('./todoFilter.scss');

// Component

interface ITodoFilterStateProps {
  active: boolean;
}

interface ITodoFilterDispatchProps {
  setVisibilityFilter(): void;
}

type ITodoFilterProps = ITodoFilterStateProps & ITodoFilterDispatchProps;

class TodoFilterComponent extends React.Component<ITodoFilterProps> {
  public onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.setVisibilityFilter();
  }

  public render() {
    if (this.props.active) {
      return (
        <a href='#' className={`btn waves-effect waves-light ${styles['todo-filter-btn']}`} onClick={this.onClick}>
          {this.props.children}
        </a>
      );
    } else {
      return (
        <a href='#' className={`btn-flat waves-effect waves-light ${styles['todo-filter-btn']}`} onClick={this.onClick}>
          {this.props.children}
        </a>
      );
    }
  }
}

// Container

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

export const TodoFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoFilterComponent);

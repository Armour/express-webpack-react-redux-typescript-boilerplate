import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { setVisibilityFilter } from 'services/todos/actions';
import { IGlobalStateRecord } from 'types/global';

const styles = require('./todoFilter.scss');

// Component

interface ITodoFilterStateProps {
  active: boolean;
}

interface ITodoFilterDispatchProps {
  setVisibilityFilter(): void;
}

interface ITodoFilterProps extends ITodoFilterStateProps, ITodoFilterDispatchProps { }

export class TodoFilter extends React.Component<ITodoFilterProps> {
  public onClick = (e: React.MouseEvent<HTMLElement>) => {
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

interface ITodoFilterOwnProps {
  filter: string;
}

const mapStateToProps = (state: IGlobalStateRecord, ownProps: ITodoFilterOwnProps): ITodoFilterStateProps => ({
  active: ownProps.filter === state.get('todosState').visibilityFilter,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: ITodoFilterOwnProps): ITodoFilterDispatchProps => ({
  setVisibilityFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoFilter);

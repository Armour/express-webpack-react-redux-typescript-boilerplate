import { connect, Dispatch } from 'react-redux';

import { toggleTodo } from 'actions';
import TodoList from 'components/TodoList';
import { VisibilityFiltersOptions } from 'constants/actionTypes';
import { ITodoAppState, ITodoListDispatchProps, ITodoListStateProps, ITodoModel, IVisibilityFilterOptions } from 'types';

const getVisibleTodos = (todos: ITodoModel[], filter: IVisibilityFilterOptions): ITodoModel[] => {
  switch (filter) {
    case VisibilityFiltersOptions.SHOW_ALL:
      return todos;
    case VisibilityFiltersOptions.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFiltersOptions.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state: ITodoAppState): ITodoListStateProps => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ITodoAppState>): ITodoListDispatchProps => {
  return {
    onClick: (id: string) => {
      dispatch(toggleTodo(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

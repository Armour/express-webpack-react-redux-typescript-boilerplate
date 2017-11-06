import { connect, Dispatch } from 'react-redux';

import { toggleTodo } from 'actions';
import { TodoList } from 'components/TodoList';
import { VisibilityFiltersOptions } from 'constants/actionTypes';
import { ITodoAppState, ITodoListDispatchProps, ITodoListStateProps, ITodoModelList, IVisibilityFilterOption } from 'types';

const getVisibleTodos = (todos: ITodoModelList, filter: IVisibilityFilterOption): ITodoModelList => {
  switch (filter) {
  case VisibilityFiltersOptions.SHOW_ALL:
    return todos;
  case VisibilityFiltersOptions.SHOW_COMPLETED:
    return todos.filter(t => t !== undefined && t.completed).toList();
  case VisibilityFiltersOptions.SHOW_ACTIVE:
    return todos.filter(t => t !== undefined && !t.completed).toList();
  default:
    return todos;
  }
};

const mapStateToProps = (state: ITodoAppState): ITodoListStateProps => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: Dispatch<ITodoAppState>): ITodoListDispatchProps => ({
  onClick: (id: string) => {
    dispatch(toggleTodo(id));
  },
});

export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

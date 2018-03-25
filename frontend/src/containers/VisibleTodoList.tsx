import { connect, Dispatch } from 'react-redux';

import { toggleTodo } from 'actions';
import { TodoList } from 'components/TodoList';
import { VisibilityFiltersOptions } from 'constants/visibilityFilers';
import { IAppState, ITodoList, ITodoListDispatchProps, ITodoListStateProps, IVisibilityFilterOption } from 'types';

const getVisibleTodos = (todos: ITodoList, filter: IVisibilityFilterOption): ITodoList => {
  switch (filter) {
  case VisibilityFiltersOptions.SHOW_ALL:
    return todos;
  case VisibilityFiltersOptions.SHOW_COMPLETED:
    return todos.filter((t) => t !== undefined && t.completed).toList();
  case VisibilityFiltersOptions.SHOW_ACTIVE:
    return todos.filter((t) => t !== undefined && !t.completed).toList();
  default:
    return todos;
  }
};

const mapStateToProps = (state: IAppState): ITodoListStateProps => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: Dispatch<IAppState>): ITodoListDispatchProps => ({
  toggleTodo: (id: string) => {
    dispatch(toggleTodo(id));
  },
});

export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

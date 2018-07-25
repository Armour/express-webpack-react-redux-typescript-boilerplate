import { List } from 'immutable';

import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { toggleTodo } from 'actions';
import { ITodoListDispatchProps, ITodoListStateProps, TodoList } from 'components/TodoList';
import { VisibilityFiltersOptions } from 'constants/actions';
import { IGlobalState, ITodo, ITodosState } from 'types';

const getVisibleTodos = (todosState: ITodosState): List<ITodo> => {
  switch (todosState.visibilityFilter) {
    case VisibilityFiltersOptions.SHOW_ALL:
      return todosState.todos;
    case VisibilityFiltersOptions.SHOW_COMPLETED:
      return todosState.todos.filter((t) => t !== undefined && t.completed).toList();
    case VisibilityFiltersOptions.SHOW_ACTIVE:
      return todosState.todos.filter((t) => t !== undefined && !t.completed).toList();
    default:
      return todosState.todos;
  }
};

const mapStateToProps = (state: IGlobalState): ITodoListStateProps => ({
  todos: getVisibleTodos(state.todosState),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): ITodoListDispatchProps => ({
  toggleTodo: (id: string) => {
    dispatch(toggleTodo(id));
  },
});

export const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

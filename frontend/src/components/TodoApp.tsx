import React from 'react';

import TodoFooter from 'components/TodoFooter';
import AddTodo from 'containers/AddTodo';
import VisibleTodoList from 'containers/VisibleTodoList';

interface ITodoAppProps {}

interface ITodoAppState {}

class TodoApp extends React.Component<ITodoAppProps, ITodoAppState> {
  public render() {
    return (
      <div className="todo-app center-align z-depth-2">
        <span className="todo-title">todos</span>
        <AddTodo />
        <VisibleTodoList />
        <TodoFooter />
      </div>
    );
  }
}

export default TodoApp;

import React from 'react';

import TodoApp from 'components/TodoApp';

interface IReactPageProps {}

interface IReactPageState {}

class ReactPage extends React.Component<IReactPageProps, IReactPageState> {
  public render() {
    return (
      <div>
        <div className="block">
          <h1>React</h1>
          <TodoApp />
        </div>
      </div>
    );
  }
}

export default ReactPage;

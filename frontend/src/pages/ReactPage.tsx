import React from 'react';

import TodoLayout from 'components/TodoLayout';
import AsyncApi from 'containers/AsyncApi';

interface IReactPageProps {}

interface IReactPageState {}

class ReactPage extends React.Component<IReactPageProps, IReactPageState> {
  public render() {
    return (
      <div>
        <div className="react-block">
          <h1>React</h1>
          <TodoLayout />
          <AsyncApi />
        </div>
      </div>
    );
  }
}

export default ReactPage;

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { TodoLayout } from 'components/TodoLayout';
import { AsyncApi } from 'containers/AsyncApi';

interface IReactPageProps extends RouteComponentProps<any> {}

interface IReactPageState {}

export class ReactPage extends React.Component<IReactPageProps, IReactPageState> {
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

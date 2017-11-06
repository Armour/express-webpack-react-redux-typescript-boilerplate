import React from 'react';

import { TodoLayout } from 'components/TodoLayout';
import { AsyncApi } from 'containers/AsyncApi';

export class ReactPage extends React.Component {
  public render() {
    return (
      <div>
        <div className='react-block'>
          <h1>React</h1>
          <TodoLayout />
          <AsyncApi />
        </div>
      </div>
    );
  }
}

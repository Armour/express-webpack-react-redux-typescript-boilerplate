import * as React from 'react';

import { TodoLayout } from 'components/TodoLayout';
import { FetchNote } from 'containers/FetchNote';

export class ReactPage extends React.Component {
  public render() {
    return (
      <div>
        <div className='react-block'>
          <h1>React</h1>
          <TodoLayout />
          <FetchNote />
        </div>
      </div>
    );
  }
}

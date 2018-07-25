import * as React from 'react';

import { TodoLayout } from 'components/TodoLayout';
import { FetchNoteContainer } from 'containers/FetchNoteContainer';

export class ReactPage extends React.Component {
  public render() {
    return (
      <div>
        <div className='react-container'>
          <h1 className='page-title'>React</h1>
          <TodoLayout />
          <FetchNoteContainer />
        </div>
      </div>
    );
  }
}

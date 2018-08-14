import * as React from 'react';

import FetchNote from './components/FetchNote';
import TodoLayout from './components/TodoLayout';

export default class ReactPage extends React.Component {
  public render() {
    return (
      <div>
        <div className='react-container'>
          <h1 className='page-title'>React</h1>
          <TodoLayout />
          <FetchNote />
        </div>
      </div>
    );
  }
}

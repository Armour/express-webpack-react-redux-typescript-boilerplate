import React from 'react';
import { NamespacesConsumer } from 'react-i18next';

import TodoFilter from './components/TodoFilter';

export class TodoFooter extends React.Component {
  public render() {
    return (
      <NamespacesConsumer ns='reactPage'>
        {(t) => (
          <div className='todo-footer'>
            <TodoFilter filter='SHOW_ALL'>
              {t('todoLayout.todoFooter.all')}
            </TodoFilter>
            <TodoFilter filter='SHOW_ACTIVE'>
              {t('todoLayout.todoFooter.active')}
            </TodoFilter>
            <TodoFilter filter='SHOW_COMPLETED'>
              {t('todoLayout.todoFooter.completed')}
            </TodoFilter>
          </div>
        )}
      </NamespacesConsumer>
    );
  }
}

export default TodoFooter;

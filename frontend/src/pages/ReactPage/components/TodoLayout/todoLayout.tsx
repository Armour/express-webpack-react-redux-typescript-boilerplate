import * as React from 'react';
import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';

import TodoFooter from './components/TodoFooter';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import i18ns from './i18n';

const styles = require('./todoLayout.scss');

interface ITodoLayoutProps extends InjectedI18nProps, InjectedTranslateProps { }

export class TodoLayout extends React.Component<ITodoLayoutProps> {
  constructor(props: ITodoLayoutProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'TodoLayout', i18ns[key]);
    });
  }

  public render() {
    const { t } = this.props;
    return (
      <div className={`center-align z-depth-2 ${styles['todo-layout']}`}>
        <span className={styles['todo-title']}>{t('todos')}</span>
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </div>
    );
  }
}

export default translate('TodoLayout')(TodoLayout);

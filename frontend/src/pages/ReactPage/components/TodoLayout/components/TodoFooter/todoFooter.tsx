import React from 'react';
import { withNamespaces, WithNamespaces as Ii18nProps } from 'react-i18next';

import TodoFilter from './components/TodoFilter';
import i18ns from './i18n';

export class TodoFooter extends React.Component<Ii18nProps> {
  constructor(props: Ii18nProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'TodoFooter', i18ns[key]);
    });
  }

  public render() {
    const { t } = this.props;
    return (
      <div className='todo-footer'>
        <TodoFilter filter='SHOW_ALL'>
          {t('all')}
        </TodoFilter>
        <TodoFilter filter='SHOW_ACTIVE'>
          {t('active')}
        </TodoFilter>
        <TodoFilter filter='SHOW_COMPLETED'>
          {t('completed')}
        </TodoFilter>
      </div>
    );
  }
}

export default withNamespaces('TodoFooter')(TodoFooter);

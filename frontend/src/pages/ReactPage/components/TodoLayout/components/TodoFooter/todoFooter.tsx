import * as React from 'react';
import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';

import TodoFilter from './components/TodoFilter';
import i18ns from './i18n';

interface ITodoFooterProps extends InjectedI18nProps, InjectedTranslateProps { }

export class TodoFooter extends React.Component<ITodoFooterProps> {
  constructor(props: ITodoFooterProps) {
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

export default translate('TodoFooter')(TodoFooter);

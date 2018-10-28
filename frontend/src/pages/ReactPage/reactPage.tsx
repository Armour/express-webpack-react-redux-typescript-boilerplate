import React from 'react';
import { withNamespaces, WithNamespaces as Ii18nProps } from 'react-i18next';

import FetchNote from './components/FetchNote';
import TodoLayout from './components/TodoLayout';
import i18ns from './i18n';

export class ReactPage extends React.Component<Ii18nProps> {
  constructor(props: Ii18nProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'ReactPage', i18ns[key]);
    });
  }

  public render() {
    const { t } = this.props;
    return (
      <div>
        <div className='react-container'>
          <h1 className='page-title'>{t('title')}</h1>
          <TodoLayout />
          <FetchNote />
        </div>
      </div>
    );
  }
}

export default withNamespaces('ReactPage')(ReactPage);

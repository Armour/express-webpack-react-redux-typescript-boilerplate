import * as React from 'react';
import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';

import FetchNote from './components/FetchNote';
import TodoLayout from './components/TodoLayout';
import i18ns from './i18n';

interface IReactPageProps extends InjectedI18nProps, InjectedTranslateProps { }

export class ReactPage extends React.Component<IReactPageProps> {
  constructor(props: IReactPageProps) {
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

export default translate('ReactPage')(ReactPage);

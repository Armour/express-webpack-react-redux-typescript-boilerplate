import * as React from 'react';
import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';

import i18ns from './i18n';

interface IFooterProps extends InjectedI18nProps, InjectedTranslateProps { }

export class Footer extends React.Component<IFooterProps> {
  constructor(props: IFooterProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'Footer', i18ns[key]);
    });
  }

  public render() {
    const { t } = this.props;
    return (
      <footer className='page-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <h5 className='white-text'>{t('footer-title')}</h5>
              <p className='grey-text text-lighten-4'>{t('footer-content')}</p>
            </div>
            <div className='col l3 offset-l3 s12'>
              <h5 className='white-text'>{t('links')}</h5>
              <ul>
                <li><a className='grey-text text-lighten-3' href='#'>{t('link-1')}</a></li>
                <li><a className='grey-text text-lighten-3' href='#'>{t('link-2')}</a></li>
                <li><a className='grey-text text-lighten-3' href='#'>{t('link-3')}</a></li>
                <li><a className='grey-text text-lighten-3' href='#'>{t('link-4')}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            © 2017 Copyright <a className='grey-text text-lighten-4' href='https://github.com/Armour'>Armour</a>
            <a className='grey-text text-lighten-4 right' href='#'>{t('more-links')}</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default translate('Footer')(Footer);

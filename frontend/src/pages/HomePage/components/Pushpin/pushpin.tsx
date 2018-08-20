import * as React from 'react';
import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';

import i18ns from './i18n';

const styles = require('./pushpin.scss');

interface IPushpinProps extends InjectedI18nProps, InjectedTranslateProps {
  color: string;
  depth: string;
}

export class Pushpin extends React.Component<IPushpinProps> {
  constructor(props: IPushpinProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'Pushpin', i18ns[key]);
    });
  }

  public render() {
    const { t } = this.props;
    return (
      <div id={this.props.color} className={`${styles.pushpin} ${this.props.color} ${this.props.depth}`}>
        <nav className='pushpin-nav pin-top' data-target={'pushpin-' + this.props.color}>
          <div className={`nav-wrapper ${this.props.color} pushpin-${this.props.color}`}>
            <div className='container'>
              <a href='#' className='brand-logo'>{t(this.props.color)}</a>
              <ul id={`nav-demo-${this.props.color}`} className='right hide-on-med-and-down'>
                <li><a href='#'>{t('link-1')}</a></li>
                <li><a href='#'>{t('link-2')}</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default translate('Pushpin')(Pushpin);

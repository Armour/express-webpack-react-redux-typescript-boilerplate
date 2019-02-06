import React from 'react';
import { Translation } from 'react-i18next';

const styles = require('./pushpin.scss');

interface IPushpinProps {
  color: string;
  depth: string;
}

export class Pushpin extends React.Component<IPushpinProps> {
  public render() {
    return (
      <Translation ns='homePage'>
        {(t) => (
          <div id={this.props.color} className={`${styles.pushpin} ${this.props.color} ${this.props.depth}`}>
            <nav className='pushpin-nav pin-top' data-target={'pushpin-' + this.props.color}>
              <div className={`nav-wrapper ${this.props.color} pushpin-${this.props.color}`}>
                <div className='container'>
                  <a href='#' className='brand-logo'>{t('pushpin.' + this.props.color)}</a>
                  <ul id={`nav-demo-${this.props.color}`} className='right hide-on-med-and-down'>
                    <li><a href='#'>{t('pushpin.linkOne')}</a></li>
                    <li><a href='#'>{t('pushpin.linkTwo')}</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        )}
      </Translation>
    );
  }
}

export default Pushpin;

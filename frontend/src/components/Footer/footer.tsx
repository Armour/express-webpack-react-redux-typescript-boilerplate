import React from 'react';
import { Translation } from 'react-i18next';

export class Footer extends React.Component {
  public render() {
    return (
      <Translation ns='common'>
        {(t) => (
          <footer className='page-footer'>
            <div className='container'>
              <div className='row'>
                <div className='col l6 s12'>
                  <h5 className='white-text'>{t('footer.title')}</h5>
                  <p className='grey-text text-lighten-4'>{t('footer.content')}</p>
                </div>
                <div className='col l3 offset-l3 s12'>
                  <h5 className='white-text'>{t('footer.links')}</h5>
                  <ul>
                    <li><a className='grey-text text-lighten-3' href='#'>{t('footer.linkOne')}</a></li>
                    <li><a className='grey-text text-lighten-3' href='#'>{t('footer.linkTwo')}</a></li>
                    <li><a className='grey-text text-lighten-3' href='#'>{t('footer.linkThree')}</a></li>
                    <li><a className='grey-text text-lighten-3' href='#'>{t('footer.linkFour')}</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='footer-copyright'>
              <div className='container'>
                © 2017 Copyright <a className='grey-text text-lighten-4' href='https://github.com/Armour'>Armour</a>
                <a className='grey-text text-lighten-4 right' href='#'>{t('footer.moreLinks')}</a>
              </div>
            </div>
          </footer>
        )}
      </Translation>
    );
  }
}

export default Footer;

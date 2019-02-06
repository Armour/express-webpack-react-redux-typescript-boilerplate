import i18next from 'i18next';
import React from 'react';
import { Translation } from 'react-i18next';

const floatingActionButtonConfig: Partial<M.FloatingActionButtonOptions> = {
  direction: 'top',
};

export class TranslationButton extends React.Component {
  public componentDidMount() {
    const elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, floatingActionButtonConfig);
  }

  public changeLanguage = (i18n: i18next.i18n, lng: string) => (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    i18n.changeLanguage(lng);
  }

  public render() {
    return (
      <Translation>
        {(_, {i18n}) => (
          <div className='fixed-action-btn vertical'>
            <a className='btn-floating btn-large red'>
              <i className='large material-icons'>translate</i>
            </a>
            <ul>
              <li><a className='btn-floating red' onClick={this.changeLanguage(i18n, 'en')}>en</a></li>
              <li><a className='btn-floating green' onClick={this.changeLanguage(i18n, 'zh')}>zh</a></li>
              <li><a className='btn-floating yellow darken-1' onClick={this.changeLanguage(i18n, 'jp')}>jp</a></li>
            </ul>
          </div>
        )}
      </Translation>
    );
  }
}

export default TranslationButton;

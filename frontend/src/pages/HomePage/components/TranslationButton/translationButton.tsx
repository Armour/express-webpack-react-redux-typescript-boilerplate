import React from 'react';
import { withNamespaces, WithNamespaces as Ii18nProps } from 'react-i18next';

const floatingActionButtonConfig: Partial<M.FloatingActionButtonOptions> = {
  direction: 'top',
};

export class TranslationButton extends React.Component<Ii18nProps> {
  public componentDidMount() {
    const elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, floatingActionButtonConfig);
  }

  public changeLanguage = (lng: string) => {
    return () => {
      const { i18n } = this.props;
      i18n.changeLanguage(lng);
    };
  }

  public render() {
    return (
      <div className='fixed-action-btn vertical'>
        <a className='btn-floating btn-large red'>
          <i className='large material-icons'>translate</i>
        </a>
        <ul>
          <li><a className='btn-floating red' onClick={this.changeLanguage('en')}>en</a></li>
          <li><a className='btn-floating green' onClick={this.changeLanguage('zh')}>zh</a></li>
          <li><a className='btn-floating yellow darken-1' onClick={this.changeLanguage('jp')}>jp</a></li>
        </ul>
      </div>
    );
  }
}

export default withNamespaces('TranslationButton')(TranslationButton);

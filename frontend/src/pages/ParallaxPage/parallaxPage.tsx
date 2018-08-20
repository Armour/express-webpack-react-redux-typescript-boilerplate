import * as React from 'react';
import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';

import PrismCodes, { PARALLAX_CODE } from './components/PrismCodes';
import i18ns from './i18n';

const styles = require('./parallaxPage.scss');

interface IParallaxPageProps extends InjectedI18nProps, InjectedTranslateProps { }

export class ParallaxPage extends React.Component<IParallaxPageProps> {
  constructor(props: IParallaxPageProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'ParallaxPage', i18ns[key]);
    });
  }

  public componentDidMount() {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }

  public render() {
    const { t } = this.props;
    return (
      <div>
        <div className='white'>
          <h1 className='page-title'>{t('title')}</h1>
        </div>
        <div className='parallax-container'>
          <div className='parallax'>
            <img className='parallax-img' src={require('./assets/images/parallax1.jpg')} alt='parallax-img' />
          </div>
        </div>
        <div className='section white'>
          <div className='row container'>
            <h2 className={styles['parallax-header']}>Parallax</h2>
            <p className='grey-text text-darken-3'>{t('parallax-description')}</p>
          </div>
          <div className='row container'>
            <h4 className='light'>Parallax Demo Code</h4>
            <PrismCodes language='language-tsx'>
              {PARALLAX_CODE}
            </PrismCodes>
          </div>
        </div>
        <div className='parallax-container'>
          <div className='parallax'>
            <img className='parallax-img' src={require('./assets/images/parallax2.jpg')} alt='parallax-img' />
          </div>
        </div>
      </div>
    );
  }
}

export default translate('ParallaxPage')(ParallaxPage);

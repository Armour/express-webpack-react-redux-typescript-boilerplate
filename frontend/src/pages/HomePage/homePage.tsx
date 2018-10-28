import React from 'react';
import { withNamespaces, WithNamespaces as Ii18nProps } from 'react-i18next';

import Carousel from './components/Carousel';
import Pushpin from './components/Pushpin';
import TranslationButton from './components/TranslationButton';
import i18ns from './i18n';

const styles = require('./homePage.scss');

export class HomePage extends React.Component<Ii18nProps> {
  constructor(props: Ii18nProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'HomePage', i18ns[key]);
    });
  }

  public componentDidMount() {
    document.querySelectorAll('.pushpin-nav').forEach((elem, _) => {
      const target = document.querySelector('.' + elem.getAttribute('data-target')!);
      const rect = target!.getBoundingClientRect();
      let top = rect.top;
      // Make sure element is not hidden (display: none) or disconnected
      if (rect.width || rect.height || target!.getClientRects().length) {
        top += window.pageYOffset - target!.ownerDocument!.documentElement!.clientTop;
      }
      const bottom = top + elem.parentElement!.getBoundingClientRect().height - rect.height;
      M.Pushpin.init(elem, {
        top,
        bottom,
      });
    });
  }

  public render() {
    const { t } = this.props;
    return (
      <div>
        <div className={styles['home-page-block']}>
          <h1 className='page-title'>{t('title')}</h1>
          <div className='container'>
            <Carousel />
          </div>
        </div>
        <Pushpin color='blue' depth='lighten-1' />
        <Pushpin color='green' depth='lighten-1' />
        <Pushpin color='orange' depth='lighten-1' />
        <Pushpin color='red' depth='lighten-1' />
        <Pushpin color='purple' depth='lighten-1' />
        <Pushpin color='cyan' depth='lighten-1' />
        <TranslationButton />
      </div>
    );
  }
}

export default withNamespaces('HomePage')(HomePage);

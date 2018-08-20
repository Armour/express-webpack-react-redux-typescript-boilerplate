import * as React from 'react';
import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';

import { CAROUSEL_AUTOPLAY_INTERVAL, TOAST_DISPLAY_DURATION, TOOLTIP_DELAY_TIME } from './constants/carousel';
import i18ns from './i18n';

const tooltipConfig: Partial<M.TooltipOptions> = {
  enterDelay: TOOLTIP_DELAY_TIME,
  position: 'top',
};

const carouselConfig: Partial<M.CarouselOptions> = {
  fullWidth: true,
  indicators: true,
};

const toastConfig: Partial<M.ToastOptions> = {
  inDuration: TOAST_DISPLAY_DURATION / 4,
  outDuration: TOAST_DISPLAY_DURATION / 4,
  displayLength: TOAST_DISPLAY_DURATION,
};

interface ICarouselProps extends InjectedI18nProps, InjectedTranslateProps { }

export class Carousel extends React.Component<ICarouselProps> {
  public timer: number = 0;

  constructor(props: ICarouselProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'Carousel', i18ns[key]);
    });
  }

  public componentDidMount() {
    const carouselElems = document.querySelectorAll('.carousel.carousel-slider');
    const carousels = M.Carousel.init(carouselElems, carouselConfig);
    this.timer = window.setTimeout(() => this.autoPlayCarousel(carousels), CAROUSEL_AUTOPLAY_INTERVAL);
  }

  public componentWillUnmount() {
    clearTimeout(this.timer);
  }

  public autoPlayCarousel = (carousels: M.Carousel[]) => {
    carousels.forEach((carousel) => {
      if (!carousel.pressed) {
        carousel.next();
      }
    });
    this.timer = window.setTimeout(() => this.autoPlayCarousel(carousels), CAROUSEL_AUTOPLAY_INTERVAL);
  }

  public displayToast = () => {
    M.toast(toastConfig);
  }

  public render() {
    const { t } = this.props;
    toastConfig.html = t('toast-text');
    tooltipConfig.html = t('tooltip-text');
    const tooltipElems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltipElems, tooltipConfig);
    return (
      <div className='carousel carousel-slider center z-depth-3' data-indicators='true'>
        <div className='carousel-fixed-item center'>
          <a className='btn tooltipped waves-effect white grey-text text-darken-2' onClick={this.displayToast} role='button'>{t('focus-button-text')}</a>
        </div>
        <a className='carousel-item green white-text' href='#one!'>
          <h2>{t('first-panel-title')}</h2>
          <p>{t('first-panel-description')}</p>
        </a>
        <a className='carousel-item amber white-text' href='#two!'>
          <h2>{t('second-panel-title')}</h2>
          <p>{t('second-panel-description')}</p>
        </a>
        <a className='carousel-item red white-text' href='#three!'>
          <h2>{t('third-panel-title')}</h2>
          <p>{t('third-panel-description')}</p>
        </a>
        <a className='carousel-item purple white-text' href='#four!'>
          <h2>{t('fourth-panel-title')}</h2>
          <p>{t('fourth-panel-description')}</p>
        </a>
      </div>
    );
  }
}

export default translate('Carousel')(Carousel);

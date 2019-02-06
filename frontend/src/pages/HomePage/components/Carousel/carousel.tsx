import React from 'react';
import { Translation } from 'react-i18next';

import { CAROUSEL_AUTOPLAY_INTERVAL, TOAST_DISPLAY_DURATION, TOOLTIP_DELAY_TIME } from './constants/carousel';

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

export class Carousel extends React.Component {
  public timer: number = 0;

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

  public displayToast = (text: string) => (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toastConfig.html = text;
    M.toast(toastConfig);
  }

  public initTooltip = (text: string) => {
    tooltipConfig.html = text;
    const tooltipElems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltipElems, tooltipConfig);
  }

  public render() {
    return (
      <Translation ns='homePage'>
        {(t) => (
          this.initTooltip(t('carousel.tooltipText')),
          <div className='carousel carousel-slider center z-depth-3' data-indicators='true'>
            <div className='carousel-fixed-item center'>
              <a className='btn tooltipped waves-effect white grey-text text-darken-2' onClick={this.displayToast(t('carousel.toastText'))} role='button'>
                {t('carousel.focusButtonText')}
              </a>
            </div>
            <a className='carousel-item green white-text' href='#one!'>
              <h2>{t('carousel.firstPanelTitle')}</h2>
              <p>{t('carousel.firstPanelDescription')}</p>
            </a>
            <a className='carousel-item amber white-text' href='#two!'>
              <h2>{t('carousel.secondPanelTitle')}</h2>
              <p>{t('carousel.secondPanelDescription')}</p>
            </a>
            <a className='carousel-item red white-text' href='#three!'>
              <h2>{t('carousel.thirdPanelTitle')}</h2>
              <p>{t('carousel.thirdPanelDescription')}</p>
            </a>
            <a className='carousel-item purple white-text' href='#four!'>
              <h2>{t('carousel.fourthPanelTitle')}</h2>
              <p>{t('carousel.fourthPanelDescription')}</p>
            </a>
          </div>
        )}
      </Translation>
    );
  }
}

export default Carousel;

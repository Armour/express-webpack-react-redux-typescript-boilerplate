import * as React from 'react';

import { CAROUSEL_AUTOPLAY_INTERVAL, TOAST_DISPLAY_DURATION, TOOLTIP_DELAY_TIME } from './constants/carousel';

const tooltipConfig: Partial<M.TooltipOptions> = {
  enterDelay: TOOLTIP_DELAY_TIME,
  position: 'top',
  html: 'Click Me! >. <',
};

const carouselConfig: Partial<M.CarouselOptions> = {
  fullWidth: true,
  indicators: true,
};

const toastConfig: Partial<M.ToastOptions> = {
  inDuration: TOAST_DISPLAY_DURATION / 4,
  outDuration: TOAST_DISPLAY_DURATION / 4,
  displayLength: TOAST_DISPLAY_DURATION,
  html: 'I am a toast!',
};

export class Carousel extends React.Component {
  public timer: number = 0;

  public componentDidMount() {
    const tooltipElems = document.querySelectorAll('.tooltipped');
    const carouselElems = document.querySelectorAll('.carousel.carousel-slider');
    M.Tooltip.init(tooltipElems, tooltipConfig);
    const carousels = M.Carousel.init(carouselElems, carouselConfig);
    this.timer = window.setTimeout(() => this.autoPlayCarousel(carousels), CAROUSEL_AUTOPLAY_INTERVAL);
  }

  public componentWillUnmount() {
    clearTimeout(this.timer);
  }

  public autoPlayCarousel = (carousels: M.Carousel[]) => {
    carousels.forEach((carousel) => {
      carousel.next();
    });
    this.timer = window.setTimeout(() => this.autoPlayCarousel(carousels), CAROUSEL_AUTOPLAY_INTERVAL);
  }

  public displayToast = () => {
    M.toast(toastConfig);
  }

  public render() {
    return (
      <div className='carousel carousel-slider center z-depth-3' data-indicators='true'>
        <div className='carousel-fixed-item center'>
          <a className='btn tooltipped waves-effect white grey-text text-darken-2' data-position={tooltipConfig.position} data-delay={tooltipConfig.enterDelay} data-tooltip={tooltipConfig.html} onClick={this.displayToast} role='button'>Focus me!</a>
        </div>
        <a className='carousel-item green white-text' href='#one!'>
          <h2>First Panel</h2>
          <p>This is your first panel, try to swipe it!</p>
        </a>
        <a className='carousel-item amber white-text' href='#two!'>
          <h2>Second Panel</h2>
          <p>This is your second panel, try to swipe it!</p>
        </a>
        <a className='carousel-item red white-text' href='#three!'>
          <h2>Third Panel</h2>
          <p>This is your third panel, try to swipe it!</p>
        </a>
        <a className='carousel-item purple white-text' href='#four!'>
          <h2>Fourth Panel</h2>
          <p>This is your fourth panel, try to swipe it!</p>
        </a>
      </div>
    );
  }
}

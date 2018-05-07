import * as React from 'react';

import { TOAST_DISPLAY_DURATION, TOOLTIP_DELAY_TIME } from 'constants/timers';

const tooltipConfig: Partial<M.TooltipOptions> = {
  enterDelay: TOOLTIP_DELAY_TIME,
  position: 'top',
  html: 'Click Me! >. <',
};

const carouselConfig: Partial<M.CarouselOptions> = {
  fullWidth: true,
};

const toastConfig: Partial<M.ToastOptions> = {
  inDuration: TOAST_DISPLAY_DURATION / 4,
  outDuration: TOAST_DISPLAY_DURATION / 4,
  displayLength: TOAST_DISPLAY_DURATION,
  html: 'I am a toast!',
};

export class Carousel extends React.Component {
  public componentDidMount() {
    const tooltipElems = document.querySelectorAll('.tooltipped');
    const carouselElems = document.querySelectorAll('.carousel.carousel-slider');
    M.Tooltip.init(tooltipElems, tooltipConfig);
    M.Carousel.init(carouselElems, carouselConfig);
  }

  public displayToast = () => {
    M.toast(toastConfig);
  }

  public render() {
    return (
      <div className='carousel carousel-slider center z-depth-3' data-indicators='true'>
        <div className='carousel-fixed-item center'>
          <a className='btn tooltipped waves-effect white grey-text darken-text-2' data-position={tooltipConfig.position} data-delay={tooltipConfig.enterDelay} data-tooltip={tooltipConfig.html} onClick={this.displayToast} role='button'>Focus me!</a>
        </div>
        <a className='carousel-item green white-text' href='#one!'>
          <h2>First Panel</h2>
          <p className='white-text'>This is your first panel</p>
        </a>
        <a className='carousel-item amber white-text' href='#two!'>
          <h2>Second Panel</h2>
          <p className='white-text'>This is your second panel</p>
        </a>
        <a className='carousel-item red white-text' href='#three!'>
          <h2>Third Panel</h2>
          <p className='white-text'>This is your third panel</p>
        </a>
        <a className='carousel-item purple white-text' href='#four!'>
          <h2>Fourth Panel</h2>
          <p className='white-text'>This is your fourth panel</p>
        </a>
      </div>
    );
  }
}

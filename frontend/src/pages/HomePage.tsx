import React from 'react';

import { Carousel } from 'components/Carousel';
import { FAB } from 'components/FAB';
import { Pushpin } from 'components/Pushpin';

export class HomePage extends React.Component {
  public componentDidMount() {
    $('.pushpin-demo-nav').each((_, elem) => {
      const target = $(`#${$(elem).attr('data-target')}`);
      const top = target.offset()!.top;
      const bottom = top + target.outerHeight()! - $(elem).height()!;
      $(elem).pushpin({
        top,
        bottom,
      });
    });
  }

  public render() {
    return (
      <div>
        <div className='pushpin-block'>
          <h1>Home</h1>
          <div className='container'>
          <Carousel />
          </div>
        </div>
        <Pushpin color='orange' />
        <Pushpin color='red' />
        <Pushpin color='green' />
        <FAB />
      </div>
    );
  }
}

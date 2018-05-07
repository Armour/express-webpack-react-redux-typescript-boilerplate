import * as React from 'react';

import { Carousel } from 'components/Carousel';
import { FAB } from 'components/FAB';
import { Pushpin } from 'components/Pushpin';

export class HomePage extends React.Component {
  public componentDidMount() {
    document.querySelectorAll('.pushpin-demo-nav').forEach((elem, _) => {
      const target = document.querySelector('.' + elem.getAttribute('data-target')!);
      const rect = target!.getBoundingClientRect();
      let top = rect.top;
      // Make sure element is not hidden (display: none) or disconnected
      if (rect.width || rect.height || target!.getClientRects().length) {
        top += window.pageYOffset - target!.ownerDocument.documentElement.clientTop;
      }
      const bottom = top + elem.parentElement!.getBoundingClientRect().height - rect.height;
      M.Pushpin.init(elem, {
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

import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Carousel } from 'components/Carousel';
import { FAB } from 'components/FAB';
import { Pushpin } from 'components/Pushpin';

interface IHomePageProps extends RouteComponentProps<any> {}

interface IHomePageState {}

export class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  public componentDidMount() {
    $('.pushpin-demo-nav').each((_, elem) => {
      const target = $('#' + $(elem).attr('data-target'));
      const offsetTop = target.offset()!.top;
      const offsetBot = offsetTop + target.outerHeight()! - $(elem).height()!;
      $(elem).pushpin({
        top: offsetTop,
        bottom: offsetBot,
      });
    });
  }

  public render() {
    return (
      <div>
        <div className="pushpin-block">
          <h1>Home</h1>
          <div className="container">
          <Carousel />
          </div>
        </div>
        <Pushpin color="orange"/>
        <Pushpin color="red"/>
        <Pushpin color="green"/>
        <FAB/>
      </div>
    );
  }
}

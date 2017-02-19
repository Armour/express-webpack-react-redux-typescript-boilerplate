import React from 'react';

import Carousel from 'components/Carousel';
import FAB from 'components/FAB';
import Pushpin from 'components/Pushpin';

interface IHomePageProps {}

interface IHomePageState {}

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  public componentDidMount() {
    $('.pushpin-demo-nav').each((_, elem) => {
      let $this = $(elem);
      let $target = $('#' + $this.attr('data-target'));
      $this.pushpin({
        bottom: $target.offset().top + $target.outerHeight() - $this.height(),
        top: $target.offset().top,
      });
    });
  }

  public render() {
    return (
      <div>
        <div className="block">
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

export default HomePage;

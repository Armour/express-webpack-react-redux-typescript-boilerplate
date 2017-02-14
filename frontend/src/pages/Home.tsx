import React from 'react';

interface IHomeProps {}
interface IHomeState {}

const pushpinStyle = {
  top: '0px',
};

class Home extends React.Component<IHomeProps, IHomeState> {
  public componentDidMount() {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
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
      <div className="home">
        <div className="block">
          <h1>Home</h1>
          <div className="container">
            <div className="carousel carousel-slider center" data-indicators="true">
              <div className="carousel-fixed-item center">
                <a className="btn waves-effect white grey-text darken-text-2">button</a>
              </div>
              <div className="carousel-item purple white-text" href="#one!">
                <h2>First Panel</h2>
                <p className="white-text">This is your first panel</p>
              </div>
              <div className="carousel-item red white-text" href="#two!">
                <h2>Second Panel</h2>
                <p className="white-text">This is your second panel</p>
              </div>
              <div className="carousel-item amber white-text" href="#three!">
                <h2>Third Panel</h2>
                <p className="white-text">This is your third panel</p>
              </div>
              <div className="carousel-item green white-text" href="#four!">
                <h2>Fourth Panel</h2>
                <p className="white-text">This is your fourth panel</p>
              </div>
            </div>
          </div>
        </div>
        <div id="orange" className="block orange lighten-1">
          <nav className="pushpin-demo-nav pin-top" data-target="orange" style={pushpinStyle}>
            <div className="nav-wrapper orange">
              <div className="container">
                <a href="#" className="brand-logo">Orange</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="#">Orange Link 1</a></li>
                  <li><a href="#">Orange Link 2</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div id="red" className="block red lighten-1">
          <nav className="pushpin-demo-nav pin-top" data-target="red" style={pushpinStyle}>
            <div className="nav-wrapper red">
              <div className="container">
                <a href="#" className="brand-logo">Red</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="#">Red Link 1</a></li>
                  <li><a href="#">Red Link 2</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div id="green" className="block green lighten-1">
          <nav className="pushpin-demo-nav pin-top" data-target="green" style={pushpinStyle}>
            <div className="nav-wrapper green">
              <div className="container">
                <a href="#" className="brand-logo">Green</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="#">Green Link 1</a></li>
                  <li><a href="#">Green Link 2</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Home;

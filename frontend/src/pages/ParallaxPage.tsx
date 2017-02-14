import React from 'react';

interface IParallaxPageProps {}
interface IParallaxPageState {}

class ParallaxPage extends React.Component<IParallaxPageProps, IParallaxPageState> {
  public componentDidMount() {
    $('.parallax').parallax();
  }
  public render() {
    return (
      <div>
        <h1>Parallax</h1>
        <div className="parallax-container">
          <div className="parallax">
            <img src="http://materializecss.com/images/parallax2.jpg"/>
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="parallax-header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src="http://materializecss.com/images/parallax1.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default ParallaxPage;

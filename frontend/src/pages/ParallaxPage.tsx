import React from 'react';

import PrismCodes from 'components/PrismCodes';
import { PARALLAX_CODE } from 'constants/prismCodes';

interface IParallaxPageProps {}

interface IParallaxPageState {}

class ParallaxPage extends React.Component<IParallaxPageProps, IParallaxPageState> {
  public componentDidMount() {
    $('.parallax').parallax();
    // HACK: parallax transform not init when using css img content instead of src attr
    $('.parallax-img-1').css('transform', 'translate3D(-50%, 299px, 0)');
  }

  public render() {
    return (
      <div>
        <div className="white">
          <h1>Parallax</h1>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img className="parallax-img-1"/>
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="parallax-header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
          <div className="row container">
            <h4 className="light">Parallax Demo HTML</h4>
            <PrismCodes language="language-markup">
              {PARALLAX_CODE}
            </PrismCodes>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img className="parallax-img-2"/>
          </div>
        </div>
      </div>
    );
  }
}

export default ParallaxPage;

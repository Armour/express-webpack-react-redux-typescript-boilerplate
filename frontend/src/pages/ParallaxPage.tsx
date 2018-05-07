import * as React from 'react';

import { PrismCodes } from 'components/PrismCodes';
import { PARALLAX_CODE } from 'constants/prismCodes';

export class ParallaxPage extends React.Component {
  public componentDidMount() {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }

  public render() {
    return (
      <div>
        <div className='white'>
          <h1>Parallax</h1>
        </div>
        <div className='parallax-container'>
          <div className='parallax'>
            <img className='parallax-img-1' src={require('../images/parallax1.jpg')} alt='parallax-img-1' />
          </div>
        </div>
        <div className='section white'>
          <div className='row container'>
            <h2 className='parallax-header'>Parallax</h2>
            <p className='grey-text text-darken-3 lighten-3'>Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
          <div className='row container'>
            <h4 className='light'>Parallax Demo HTML</h4>
            <PrismCodes language='language-markup'>
              {PARALLAX_CODE}
            </PrismCodes>
          </div>
        </div>
        <div className='parallax-container'>
          <div className='parallax'>
            <img className='parallax-img-2' src={require('../images/parallax2.jpg')} alt='parallax-img-2' />
          </div>
        </div>
      </div>
    );
  }
}

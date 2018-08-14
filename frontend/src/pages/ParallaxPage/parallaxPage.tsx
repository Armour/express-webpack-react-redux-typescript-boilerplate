import * as React from 'react';

import { PARALLAX_CODE } from './components/PrismCodes';
import PrismCodes from './components/PrismCodes';

const styles = require('./parallaxPage.scss');

export default class ParallaxPage extends React.Component {
  public componentDidMount() {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }

  public render() {
    return (
      <div>
        <div className='white'>
          <h1 className='page-title'>Parallax</h1>
        </div>
        <div className='parallax-container'>
          <div className='parallax'>
            <img className='parallax-img' src={require('./assets/images/parallax1.jpg')} alt='parallax-img' />
          </div>
        </div>
        <div className='section white'>
          <div className='row container'>
            <h2 className={styles['parallax-header']}>Parallax</h2>
            <p className='grey-text text-darken-3'>Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
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
            <img className='parallax-img' src={require('./assets/images/parallax2.jpg')} alt='parallax-img' />
          </div>
        </div>
      </div>
    );
  }
}

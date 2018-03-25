import * as React from 'react';

export class NotFoundPage extends React.Component {
  public render() {
    return (
      <div>
        <h1>Page 404</h1>
        <img className='re-zero' src={require('../images/rezero.png')} alt='re-zero' />
        <img className='re-zero' src={require('../images/rezero.png')} alt='re-zero' />
      </div>
    );
  }
}

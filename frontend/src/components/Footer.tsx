import * as React from 'react';

export class Footer extends React.Component {
  public render() {
    return (
      <footer className='page-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <h5 className='white-text'>Footer Content</h5>
              <p className='grey-text text-lighten-4'>
                You can use rows and columns here to organize your footer content.
              </p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <h5 className='white-text'>Links</h5>
              <ul>
                <li><a className='grey-text text-lighten-3' href='#'>Link 1</a></li>
                <li><a className='grey-text text-lighten-3' href='#'>Link 2</a></li>
                <li><a className='grey-text text-lighten-3' href='#'>Link 3</a></li>
                <li><a className='grey-text text-lighten-3' href='#'>Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            © 2017 Copyright Text
            <a className='grey-text text-lighten-4 right' href='#'>More Links</a>
          </div>
        </div>
      </footer>
    );
  }
}

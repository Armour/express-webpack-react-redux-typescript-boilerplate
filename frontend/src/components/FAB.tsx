import * as React from 'react';

const floatingActionButtonConfig: Partial<M.FloatingActionButtonOptions> = {
  direction: 'top',
};

export class FAB extends React.Component {
  public componentDidMount() {
    const elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, floatingActionButtonConfig);
  }

  public render() {
    return (
      <div className='fixed-action-btn vertical'>
        <a className='btn-floating btn-large red'>
          <i className='large material-icons'>mode_edit</i>
        </a>
        <ul>
          <li><a className='btn-floating red'><i className='material-icons'>insert_chart</i></a></li>
          <li><a className='btn-floating yellow darken-1'><i className='material-icons'>format_quote</i></a></li>
          <li><a className='btn-floating green'><i className='material-icons'>publish</i></a></li>
          <li><a className='btn-floating blue'><i className='material-icons'>attach_file</i></a></li>
        </ul>
      </div>
    );
  }
}

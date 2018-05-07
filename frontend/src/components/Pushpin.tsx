import * as React from 'react';

import { upperCaseFirstChar } from 'utils';

const pushpinStyle = {
  top: '0px',
};

interface IPushpinProps {
  color: string;
}

export class Pushpin extends React.Component<IPushpinProps> {
  public render() {
    return (
      <div id={this.props.color} className={`pushpin-block ${this.props.color} lighten-1`}>
        <nav className='pushpin-demo-nav pin-top' data-target={'pushpin-' + this.props.color} style={pushpinStyle}>
          <div className={`nav-wrapper ${this.props.color} pushpin-${this.props.color}`}>
            <div className='container'>
              <a href='#' className='brand-logo'>{upperCaseFirstChar(this.props.color)}</a>
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                <li><a href='#'>{upperCaseFirstChar(this.props.color)} link 1</a></li>
                <li><a href='#'>{upperCaseFirstChar(this.props.color)} link 2</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

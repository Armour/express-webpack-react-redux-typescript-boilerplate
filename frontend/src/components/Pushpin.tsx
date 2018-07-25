import * as React from 'react';

import { upperCaseFirstChar } from 'utils';

interface IPushpinProps {
  color: string;
  depth: string;
}

export class Pushpin extends React.Component<IPushpinProps> {
  public render() {
    return (
      <div id={this.props.color} className={`pushpin ${this.props.color} ${this.props.depth}`}>
        <nav className='pushpin-nav pin-top' data-target={'pushpin-' + this.props.color}>
          <div className={`nav-wrapper ${this.props.color} pushpin-${this.props.color}`}>
            <div className='container'>
              <a href='#' className='brand-logo'>{upperCaseFirstChar(this.props.color)}</a>
              <ul id='nav-demo' className='right hide-on-med-and-down'>
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

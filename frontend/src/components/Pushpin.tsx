import React from 'react';

import { upperCaseFirstChar } from 'utils/index';

const pushpinStyle = {
  top: '0px',
};

interface IPushipinProps {
  color: string;
}

interface IPushipinState {}

class Pushipin extends React.Component<IPushipinProps, IPushipinState> {
  public render() {
    return (
      <div id={this.props.color} className={`block ${this.props.color} lighten-1`}>
        <nav className="pushpin-demo-nav pin-top" data-target={this.props.color} style={pushpinStyle}>
          <div className={`nav-wrapper ${this.props.color}`}>
            <div className="container">
              <a href="#" className="brand-logo">{upperCaseFirstChar(this.props.color)}</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">{upperCaseFirstChar(this.props.color)} link 1</a></li>
                <li><a href="#">{upperCaseFirstChar(this.props.color)} link 2</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Pushipin;

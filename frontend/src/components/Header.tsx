import React from 'react';
import { NavLink } from 'react-router-dom';

import { Dropdown } from 'components/Dropdown';

interface IHeaderState {
  dropdownId: string;
  dropdownLists: string[];
}

export class Header extends React.Component<{}, IHeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      dropdownLists: ['parallax'],
      dropdownId: 'header-dropdown',
    };
  }

  public render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <div className='container'>
            <span className='brand-logo'><NavLink exact={true} activeClassName='active-link' to='/'>Logo</NavLink></span>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li key='react'><NavLink activeClassName='active-link' to='/react'>React</NavLink></li>
              <li key='materialize'>
                <a className='dropdown-button' href='#' data-beloworigin='true' data-activates={this.state.dropdownId}>Dropdown</a>
              </li>
              <li key='404'><NavLink activeClassName='active-link' to='/404'>NotFound</NavLink></li>
              <Dropdown id={this.state.dropdownId} dropdownLists={this.state.dropdownLists} />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

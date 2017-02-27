import React from 'react';

import Dropdown from 'components/Dropdown';
import NavLink from 'components/NavLink';

interface IHeaderProps {}

interface IHeaderState {
  dropdownId: string;
  dropdownLists: string[];
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      dropdownLists: ['parallax'],
      dropdownId: 'header-dropdown',
    };
  }

  public render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <span className="brand-logo"><NavLink to="/" onlyActiveOnIndex={true}>Logo</NavLink></span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li key="react"><NavLink to="/react">React</NavLink></li>
              <li key="materialize">
                <a className="dropdown-button" href="#" data-beloworigin="true" data-activates={this.state.dropdownId}>Dropdown</a>
              </li>
              <li key="404"><NavLink to="/404">NotFound</NavLink></li>
              <Dropdown id={this.state.dropdownId} dropdownLists={this.state.dropdownLists}/>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

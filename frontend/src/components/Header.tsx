import React from 'react';

import NavLink from 'components/NavLink';

interface IHeaderProps {}
interface IHeaderState {}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  public render() {
    return (
      <nav>
        <div className="row">
          <div className="col s12">
            <div className="nav-wrapper">
              <span className="brand-logo"><NavLink to="/" onlyActiveOnIndex={true}>Logo</NavLink></span>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li key="page1"><NavLink to="/page1">Page 1</NavLink></li>
                <li key="page2"><NavLink to="/page2">Page 2</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

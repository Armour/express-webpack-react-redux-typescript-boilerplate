import React from 'react';

import NavLink from 'components/NavLink';

interface IHeaderProps {}
interface IHeaderState {}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  public render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <span className="brand-logo"><NavLink to="/" onlyActiveOnIndex={true}>Logo</NavLink></span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li key="react"><NavLink to="/react">React</NavLink></li>
              <li key="parallax"><NavLink to="/parallax">Parallax</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

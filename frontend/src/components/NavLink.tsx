import React from 'react';
import { Link, LinkProps } from 'react-router';

interface INavLinkProps extends LinkProps {}

interface INavLinkState {}

class NavLink extends React.Component<INavLinkProps, INavLinkState> {
  public render() {
    return (
      <Link {...this.props} activeClassName="active-link"/>
    );
  }
}

export default NavLink;

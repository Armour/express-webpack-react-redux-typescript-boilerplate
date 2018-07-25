import { connect } from 'react-redux';

import { Header, IHeaderProps } from 'components/Header';
import { IGlobalState } from 'types';

const mapStateToProps = (state: IGlobalState): IHeaderProps => ({
  dropdownLists: ['parallax'],
  pathname: state.router!.location.pathname,
});

export const HeaderContainer = connect(
  mapStateToProps,
  null,
)(Header);

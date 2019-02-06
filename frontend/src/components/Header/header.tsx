import React from 'react';
import { Translation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Dropdown from 'components/Dropdown';
import { IGlobalStateRecord } from 'types/global';

const styles = require('./header.scss');

// Component

interface IHeaderStateProps {
  pathname: string;
}

export class Header extends React.Component<IHeaderStateProps> {
  constructor(props: IHeaderStateProps) {
    super(props);
  }

  public checkActive(urls: string[]) {
    let active = false;
    urls.forEach((url) => {
      if (this.props.pathname === '/' + url) {
        active = true;
      }
    });
    return active ? 'active' : '';
  }

  public componentDidMount() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }

  public render() {
    const dropdownList = ['parallax'];
    return (
      <Translation ns='common'>
        {(t) => (
          <div>
            <nav>
              <div className='nav-wrapper'>
                <div className='container'>
                  <Link className='brand-logo' to='/'><img className={styles.logo} alt='logo' src={require('./assets/images/logo.png')}/></Link>
                  <a href='#' data-target='nav-mobile' className='sidenav-trigger'>
                    <i className='material-icons'>menu</i>
                  </a>
                  <ul id='nav-desktop' className='right hide-on-med-and-down'>
                    <li className={this.checkActive(['react'])} key='react'><Link to='/react'>{t('header.react')}</Link></li>
                    <li className={this.checkActive(dropdownList)} key='materialize'>
                      <a className='dropdown-button' href='#' data-target='header-dropdown-desktop'>{t('header.dropdown')}<i className='material-icons right'>arrow_drop_down</i></a>
                    </li>
                    <li className={this.checkActive(['404'])} key='404'><Link to='/404'>{t('header.notfound')}</Link></li>
                    <Dropdown id='header-dropdown-desktop' dropdownLists={dropdownList} />
                  </ul>
                </div>
              </div>
            </nav>
            <ul id='nav-mobile' className='sidenav'>
              <li className={this.checkActive(['react'])} key='react'><Link to='/react'>{t('header.react')}</Link></li>
              <li className={this.checkActive(dropdownList)} key='materialize'>
                <a className='dropdown-button' href='#' data-target='header-dropdown-mobile'>{t('header.dropdown')}<i className='material-icons right'>arrow_drop_down</i></a>
              </li>
              <li className={this.checkActive(['404'])} key='404'><Link to='/404'>{t('header.notfound')}</Link></li>
              <Dropdown id='header-dropdown-mobile' dropdownLists={dropdownList} />
            </ul>
          </div>
        )}
      </Translation>
    );
  }
}

// Container

const mapStateToProps = (state: IGlobalStateRecord): IHeaderStateProps => ({
  pathname: state.getIn(['router', 'location', 'pathname']),
});

export default connect(
  mapStateToProps,
  null,
)(Header);

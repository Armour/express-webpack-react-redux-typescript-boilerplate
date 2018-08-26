import * as React from 'react';
import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Dropdown from 'components/Dropdown';
import { IGlobalState } from 'types/global';
import i18ns from './i18n';

const styles = require('./header.scss');

// Component

interface IHeaderStateProps {
  pathname: string;
}

interface IHeaderProps extends IHeaderStateProps, InjectedI18nProps, InjectedTranslateProps { }

export class Header extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'Header', i18ns[key]);
    });
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
    const { t } = this.props;
    const dropdownList = ['parallax'];
    return (
      <div>
        <nav>
          <div className='nav-wrapper'>
            <div className='container'>
              <Link className='brand-logo' to='/'><img className={styles.logo} alt='logo' src={require('./assets/images/logo.png')}/></Link>
              <a href='#' data-target='nav-mobile' className='sidenav-trigger'>
                <i className='material-icons'>menu</i>
              </a>
              <ul id='nav-desktop' className='right hide-on-med-and-down'>
                <li className={this.checkActive(['react'])} key='react'><Link to='/react'>{t('react')}</Link></li>
                <li className={this.checkActive(dropdownList)} key='materialize'>
                  <a className='dropdown-button' href='#' data-target='header-dropdown-desktop'>{t('dropdown')}<i className='material-icons right'>arrow_drop_down</i></a>
                </li>
                <li className={this.checkActive(['404'])} key='404'><Link to='/404'>{t('notfound')}</Link></li>
                <Dropdown id='header-dropdown-desktop' dropdownLists={dropdownList} />
              </ul>
            </div>
          </div>
        </nav>
        <ul id='nav-mobile' className='sidenav'>
          <li className={this.checkActive(['react'])} key='react'><Link to='/react'>{t('react')}</Link></li>
          <li className={this.checkActive(dropdownList)} key='materialize'>
            <a className='dropdown-button' href='#' data-target='header-dropdown-mobile'>{t('dropdown')}<i className='material-icons right'>arrow_drop_down</i></a>
          </li>
          <li className={this.checkActive(['404'])} key='404'><Link to='/404'>{t('notfound')}</Link></li>
          <Dropdown id='header-dropdown-mobile' dropdownLists={dropdownList} />
        </ul>
      </div>
    );
  }
}

// Container

const mapStateToProps = (state: IGlobalState): IHeaderStateProps => ({
  pathname: state.router!.location.pathname,
});

export default connect(
  mapStateToProps,
  null,
)(translate('Header')(Header));

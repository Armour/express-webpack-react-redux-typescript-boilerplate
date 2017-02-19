import React from 'react';

import NavLink from 'components/NavLink';

import { upperCaseFirstChar } from 'utils/index';

interface IDropdownProps {
  id: string;
  dropdownLists: string[];
}

interface IDropdownState {}

class Dropdown extends React.Component<IDropdownProps, IDropdownState> {
  public componentDidMount() {
    $('.dropdown-button').dropdown();
  }

  public render() {
    const links = [];
    for (const key of this.props.dropdownLists) {
      links.push(<li key={key}><NavLink to={`/${key}`}>{upperCaseFirstChar(key)}</NavLink></li>);
    }
    return (
      <ul id={this.props.id} className="dropdown-content">
        {links}
      </ul>
    );
  }
}

export default Dropdown;

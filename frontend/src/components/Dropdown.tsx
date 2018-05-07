import * as React from 'react';

import { NavLink } from 'react-router-dom';

import { upperCaseFirstChar } from 'utils';

interface IDropdownProps {
  id: string;
  dropdownLists: string[];
}

const dropdownConfig: Partial<M.DropdownOptions> = {
  coverTrigger: false,
};

export class Dropdown extends React.Component<IDropdownProps> {
  public componentDidMount() {
    const elems = document.querySelectorAll('.dropdown-button');
    M.Dropdown.init(elems, dropdownConfig);
  }

  public render() {
    const links = this.props.dropdownLists.map((key) =>
      <li key={key}><NavLink activeClassName='active-link' to={`/${key}`}>{upperCaseFirstChar(key)}</NavLink></li>,
    );
    return (
      <ul id={this.props.id} className='dropdown-content'>
        {links}
      </ul>
    );
  }
}

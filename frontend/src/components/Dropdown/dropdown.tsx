import * as React from 'react';
import { Link } from 'react-router-dom';

import { upperCaseFirstChar } from 'utils';

interface IDropdownProps {
  id: string;
  dropdownLists: string[];
}

const dropdownConfig: Partial<M.DropdownOptions> = {
  coverTrigger: false,
};

export default class Dropdown extends React.Component<IDropdownProps> {
  public componentDidMount() {
    const elems = document.querySelectorAll('.dropdown-button');
    M.Dropdown.init(elems, dropdownConfig);
  }

  public render() {
    const links = this.props.dropdownLists.map((key) =>
      <li key={key}><Link to={`/${key}`}>{upperCaseFirstChar(key)}</Link></li>,
    );
    return (
      <ul id={this.props.id} className='dropdown-content'>
        {links}
      </ul>
    );
  }
}

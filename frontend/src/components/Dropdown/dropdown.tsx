import React from 'react';
import { Translation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
    return (
      <Translation ns='common'>
        {(t) => (
          <ul id={this.props.id} className='dropdown-content'>
            {this.props.dropdownLists.map((key) =>
              <li key={key}><Link to={`/${key}`}>{t('dropdown.' + key)}</Link></li>,
            )}
          </ul>
        )}
      </Translation>
    );
  }
}

export default Dropdown;

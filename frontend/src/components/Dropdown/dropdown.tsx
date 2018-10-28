import React from 'react';
import { withNamespaces, WithNamespaces as Ii18nProps } from 'react-i18next';
import { Link } from 'react-router-dom';

import i18ns from './i18n';

interface IDropdownProps extends Ii18nProps {
  id: string;
  dropdownLists: string[];
}

const dropdownConfig: Partial<M.DropdownOptions> = {
  coverTrigger: false,
};

export class Dropdown extends React.Component<IDropdownProps> {
  constructor(props: IDropdownProps) {
    super(props);
    this.loadI18ns();
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'Dropdown', i18ns[key]);
    });
  }

  public componentDidMount() {
    const elems = document.querySelectorAll('.dropdown-button');
    M.Dropdown.init(elems, dropdownConfig);
  }

  public render() {
    const { t } = this.props;
    const links = this.props.dropdownLists.map((key) =>
      <li key={key}><Link to={`/${key}`}>{t(key)}</Link></li>,
    );
    return (
      <ul id={this.props.id} className='dropdown-content'>
        {links}
      </ul>
    );
  }
}

export default withNamespaces('Dropdown')(Dropdown);

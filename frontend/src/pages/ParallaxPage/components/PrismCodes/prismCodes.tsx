import React from 'react';

import { highlightAll } from 'prismjs';
import 'prismjs/themes/prism.css';
import './prismCodes.scss';

interface IPrismCodesProps {
  language: string;
}

export default class PrismCodes extends React.Component<IPrismCodesProps> {
  public componentDidMount() {
    highlightAll();
  }

  public render() {
    return (
      <pre className={this.props.language}>
        <code className={`col s12 ${this.props.language}`}>
          {this.props.children}
        </code>
      </pre>
    );
  }
}

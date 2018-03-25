import * as React from 'react';

import { highlightElement } from 'prismjs';

interface IPrismCodesProps {
  language: string;
}

interface IPrismCodesState {
  code: HTMLElement;
}

export class PrismCodes extends React.Component<IPrismCodesProps, IPrismCodesState> {
  public highlightCode = (code: HTMLElement) => {
    this.setState({ code }, () => {
      highlightElement(code, false);
    });
  }

  public render() {
    return (
      <pre className={this.props.language}>
        <code className={`col s12 ${this.props.language}`} ref={this.highlightCode}>
          {this.props.children}
        </code>
      </pre>
    );
  }
}

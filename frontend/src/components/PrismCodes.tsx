import React from 'react';

import 'prismjs';

interface IPrismCodesProps {
  language: string;
}

interface IPrismCodesState {
  code: Element;
}

class PrismCodes extends React.Component<IPrismCodesProps, IPrismCodesState> {
  public highlightCode = (code: Element) => {
    this.setState({ code }, () => {
      Prism.highlightElement(this.state.code, false);
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

export default PrismCodes;

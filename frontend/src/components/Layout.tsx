import React, { ReactNode } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';

interface ILayoutProps {
  children: ReactNode;
}

interface ILayoutState {}

class Layout extends React.Component<ILayoutProps, ILayoutState> {
  public render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Layout;

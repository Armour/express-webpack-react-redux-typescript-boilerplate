import React, { ReactNode } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';

import FAB from 'components/FAB';

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
        <div>
          <img className="re-zero responsive-img" alt="re-zero"/>
          <img className="re-zero responsive-img" alt="re-zero"/>
        </div>
        <FAB/>
        <Footer/>
      </div>
    );
  }
}

export default Layout;

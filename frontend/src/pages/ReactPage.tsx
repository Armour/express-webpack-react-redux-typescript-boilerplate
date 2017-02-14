import React from 'react';

import FAB from 'components/FAB';

interface IReactPageProps {}
interface IReactPageState {}

class ReactPage extends React.Component<IReactPageProps, IReactPageState> {
  public render() {
    return (
      <div>
        <h1>React</h1>
        <img className="re-zero responsive-img"/>
        <img className="re-zero responsive-img"/>
        <FAB/>
      </div>
    );
  }
}

export default ReactPage;

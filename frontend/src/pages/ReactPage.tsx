import React from 'react';

interface IReactPageProps {}

interface IReactPageState {}

class ReactPage extends React.Component<IReactPageProps, IReactPageState> {
  public render() {
    return (
      <div>
        <div className="block">
          <h1>React</h1>
          {/* Recat code goes here */}
        </div>
      </div>
    );
  }
}

export default ReactPage;

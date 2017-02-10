import React from 'react';

interface IHomeProps {}
interface IHomeState {}

class Home extends React.Component<IHomeProps, IHomeState> {
  public render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;

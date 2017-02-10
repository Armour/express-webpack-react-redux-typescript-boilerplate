import React from 'react';

interface IPage1Props {}
interface IPage1State {}

class Page1 extends React.Component<IPage1Props, IPage1State> {
  public render() {
    return (
      <div>
        <h1>Page 1</h1>
      </div>
    );
  }
}

export default Page1;

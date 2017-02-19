import React from 'react';

interface INotFoundPageProps {}

interface INotFoundPageState {}

class NotFoundPage extends React.Component<INotFoundPageProps, INotFoundPageState> {
  public render() {
    return (
      <div>
        <h1>Page 404</h1>
        <img className="re-zero"/>
        <img className="re-zero"/>
      </div>
    );
  }
}

export default NotFoundPage;

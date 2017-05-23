import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface INotFoundPageProps extends RouteComponentProps<any> {}

interface INotFoundPageState {}

export class NotFoundPage extends React.Component<INotFoundPageProps, INotFoundPageState> {
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

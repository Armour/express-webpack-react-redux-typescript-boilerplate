import * as React from 'react';

const notFoundImageList = [
  '404.gif',
  '404-1.jpeg',
  '404-2.jpeg',
  '404.jpg',
];

interface INotFoundPageState {
  imageId: number;
}

export class NotFoundPage extends React.Component<{}, INotFoundPageState> {
  public getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }

  public componentWillMount() {
    this.setState({
      imageId: this.getRandomInt(0, notFoundImageList.length),
    });
  }

  public render() {
    return (
      <div>
        <h1 className='page-title'>404 Not Found</h1>
        <img className='not-found-img' src={require('../images/' + notFoundImageList[this.state.imageId])} alt='not-found-img' />
      </div>
    );
  }
}

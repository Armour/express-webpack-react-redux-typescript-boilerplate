import * as React from 'react';
import { InjectedI18nProps, InjectedTranslateProps, translate } from 'react-i18next';

import i18ns from './i18n';

const styles = require('./notFoundPage.scss');

const notFoundImageList = [
  '404.gif',
  '404-1.jpeg',
  '404-2.jpeg',
  '404.jpg',
];

interface INotFoundPageProps extends InjectedI18nProps, InjectedTranslateProps { }

interface INotFoundPageState {
  imageId: number;
}

export class NotFoundPage extends React.Component<INotFoundPageProps, INotFoundPageState> {
  constructor(props: INotFoundPageProps) {
    super(props);
    this.loadI18ns();
    this.state = { imageId: this.getRandomInt(0, notFoundImageList.length) };
  }

  public loadI18ns() {
    const { i18n } = this.props;
    Object.keys(i18ns).forEach((key) => {
      i18n.addResourceBundle(key, 'NotFoundPage', i18ns[key]);
    });
  }

  public getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }

  public render() {
    const { t } = this.props;
    return (
      <div>
        <h1 className='page-title'>{t('title')}</h1>
        <img className={styles['not-found-img']} src={require('./assets/images/' + notFoundImageList[this.state.imageId])} alt='not-found-img' height='550px' width='750px' />
      </div>
    );
  }
}

export default translate('NotFoundPage')(NotFoundPage);

import React from 'react';
import ContentLoader from 'react-content-loader';
import { LoadingComponentProps } from 'react-loadable';

const styles = require('./contentLoader.scss');

export default (_: LoadingComponentProps) => (
  <div className={styles.contentLoader}>
    <ContentLoader
      height={400}
      width={400}
      speed={2}
      primaryColor='#f3f3f3'
      secondaryColor='#ecebeb'
    >
      <rect x='93' y='24' rx='4' ry='4' width='210' height='30.68' />
      <rect x='0' y='76.05' rx='4' ry='4' width='400' height='304' />
    </ContentLoader>
  </div>
);

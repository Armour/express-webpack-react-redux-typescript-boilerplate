import React from 'react';
import ContentLoader from 'react-content-loader';
import { LoadingComponentProps } from 'react-loadable';

const styles = require('./contentLoader.scss');

export default (_: LoadingComponentProps) => (
  <div className={styles.contentLoader}>
    <ContentLoader
      height={500}
      width={400}
      speed={2}
      primaryColor='#f3f3f3'
      secondaryColor='#ecebeb'
    >
      <rect x='160' y='12' rx='4' ry='4' width='80' height='15.6468' />
      <rect x='0' y='41.05' rx='4' ry='4' width='399.5904' height='112.7321' />
      <rect x='49' y='163.05' rx='4' ry='4' width='299' height='126.9' />
    </ContentLoader>
  </div>
);

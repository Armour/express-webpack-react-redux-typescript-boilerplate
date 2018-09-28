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
      <rect x='160.5' y='11' rx='4' ry='4' width='76.63000000000001' height='15.093' />
      <rect x='60.5' y='35.05' rx='1' ry='1' width='275.40000000000003' height='151.35999999999999' />
    </ContentLoader>
  </div>
);

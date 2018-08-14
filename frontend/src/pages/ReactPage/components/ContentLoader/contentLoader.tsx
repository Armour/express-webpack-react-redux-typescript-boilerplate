import * as React from 'react';
import ContentLoader, { ContentLoaderProps } from 'react-content-loader';

const styles = require('./contentLoader.scss');

export default (props: ContentLoaderProps) => (
  <div className={styles.contentLoader}>
    <ContentLoader
      height={400}
      width={400}
      speed={2}
      primaryColor='#f3f3f3'
      secondaryColor='#ecebeb'
      {...props}
    >
      <rect x='93' y='24' rx='4' ry='4' width='210' height='30.68' />
      <rect x='0' y='76.05' rx='4' ry='4' width='400' height='304' />
    </ContentLoader>
  </div>
);

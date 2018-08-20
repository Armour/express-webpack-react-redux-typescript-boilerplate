import 'materialize-css';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { Carousel } from '../carousel';

const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};

describe('Carousel', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <Carousel t={tMock} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

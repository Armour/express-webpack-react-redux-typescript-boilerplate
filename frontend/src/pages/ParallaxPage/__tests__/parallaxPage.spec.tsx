import 'materialize-css';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { ParallaxPage } from '../parallaxPage';

jest.mock('../components/PrismCodes', () => ({ default: 'PrismCodes' }));
const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};

describe('ParallaxPage', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <ParallaxPage t={tMock} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

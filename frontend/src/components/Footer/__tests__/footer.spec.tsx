import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { Footer } from '../footer';

const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};

describe('Footer', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <Footer t={tMock} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

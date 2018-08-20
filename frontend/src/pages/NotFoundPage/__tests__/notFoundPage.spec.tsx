import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { NotFoundPage } from '../notFoundPage';

const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};

describe('NotFoundPage', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <NotFoundPage t={tMock} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

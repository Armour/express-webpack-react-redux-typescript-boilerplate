import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { Pushpin } from '../pushpin';

const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};

describe('Pushpin', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <Pushpin color='red' depth='base' t={tMock} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

import 'materialize-css';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { TranslationButton } from '../translationButton';

const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};

describe('TranslationButton', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TranslationButton t={tMock} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

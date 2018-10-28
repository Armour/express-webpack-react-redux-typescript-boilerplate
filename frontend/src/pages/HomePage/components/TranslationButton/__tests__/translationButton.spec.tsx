import 'materialize-css';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import { i18nMock, tMock } from 'utils/mocks';
import { TranslationButton } from '../translationButton';

describe('TranslationButton', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TranslationButton t={tMock} tReady={true} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

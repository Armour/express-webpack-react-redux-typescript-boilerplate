import React from 'react';
import TestRenderer from 'react-test-renderer';

import { i18nMock, tMock } from 'utils/mocks';
import { Footer } from '../footer';

describe('Footer', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <Footer t={tMock} tReady={true} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

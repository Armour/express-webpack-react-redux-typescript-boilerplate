import 'materialize-css';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import { i18nMock, tMock } from 'utils/mocks';
import { ParallaxPage } from '../parallaxPage';

jest.mock('../components/PrismCodes', () => 'PrismCodes');

describe('ParallaxPage', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <ParallaxPage t={tMock} tReady={true} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

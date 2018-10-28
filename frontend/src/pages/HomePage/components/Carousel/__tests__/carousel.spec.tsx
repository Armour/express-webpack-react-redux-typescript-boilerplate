import 'materialize-css';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import { i18nMock, tMock } from 'utils/mocks';
import { Carousel } from '../carousel';

describe('Carousel', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <Carousel t={tMock} tReady={true} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

import 'materialize-css';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import { i18nMock, tMock } from 'utils/mocks';
import { HomePage } from '../homePage';

jest.mock('../components/Carousel', () => 'Carousel');
jest.mock('../components/Pushpin', () => 'Pushpin');
jest.mock('../components/TranslationButton', () => 'TranslationButton');

describe('HomePage', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <HomePage t={tMock} tReady={true} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

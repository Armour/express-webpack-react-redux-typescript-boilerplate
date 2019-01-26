import 'materialize-css';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import { HomePage } from '../homePage';

jest.mock('../components/Carousel', () => 'Carousel');
jest.mock('../components/Pushpin', () => 'Pushpin');
jest.mock('../components/TranslationButton', () => 'TranslationButton');

describe('HomePage', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <HomePage />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

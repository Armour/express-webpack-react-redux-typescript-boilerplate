import 'materialize-css';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { HomePage } from '../homePage';

jest.mock('../components/Carousel', () => ({ default: 'Carousel' }));
jest.mock('../components/Pushpin', () => ({ default: 'Pushpin' }));
jest.mock('../components/TranslationButton', () => ({ default: 'TranslationButton' }));
const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};

describe('HomePage', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <HomePage t={tMock} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

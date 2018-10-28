import React from 'react';
import TestRenderer from 'react-test-renderer';

import { i18nMock, tMock } from 'utils/mocks';
import { Pushpin } from '../pushpin';

describe('Pushpin', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <Pushpin color='red' depth='base' t={tMock} tReady={true} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

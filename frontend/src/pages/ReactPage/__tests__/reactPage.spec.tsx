import React from 'react';
import TestRenderer from 'react-test-renderer';

import { i18nMock, tMock } from 'utils/mocks';
import { ReactPage } from '../reactPage';

jest.mock('../components/FetchNote', () => 'FetchNote');
jest.mock('../components/TodoLayout', () => 'TodoLayout');

describe('ReactPage', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <ReactPage t={tMock} tReady={true} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

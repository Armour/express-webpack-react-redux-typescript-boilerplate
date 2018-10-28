import React from 'react';
import TestRenderer from 'react-test-renderer';

import { i18nMock, tMock } from 'utils/mocks';
import { TodoFooter } from '../todoFooter';

jest.mock('../components/TodoFilter', () => 'TodoFilter');

describe('TodoFooter', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TodoFooter t={tMock} tReady={true} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

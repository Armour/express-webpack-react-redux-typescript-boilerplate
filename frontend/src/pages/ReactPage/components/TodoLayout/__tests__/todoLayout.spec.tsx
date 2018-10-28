import React from 'react';
import TestRenderer from 'react-test-renderer';

import { i18nMock, tMock } from 'utils/mocks';
import { TodoLayout } from '../todoLayout';

jest.mock('../components/TodoFooter', () => 'TodoFooter');
jest.mock('../components/TodoInput', () => 'TodoInput');
jest.mock('../components/TodoList', () => 'TodoList');

describe('TodoLayout', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TodoLayout t={tMock} tReady={true} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

import React from 'react';
import TestRenderer from 'react-test-renderer';

import { dispatchMock, i18nMock, tMock } from 'utils/mocks';
import { TodoInput } from '../todoInput';

describe('TodoInput', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TodoInput onSubmit={dispatchMock} t={tMock} tReady={true} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

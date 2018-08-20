import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { TodoLayout } from '../todoLayout';

jest.mock('../components/TodoFooter', () => ({ default: 'TodoFooter' }));
jest.mock('../components/TodoInput', () => ({ default: 'TodoInput' }));
jest.mock('../components/TodoList', () => ({ default: 'TodoList' }));
const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};

describe('TodoLayout', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TodoLayout t={tMock} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

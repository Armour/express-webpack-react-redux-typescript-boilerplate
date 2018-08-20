import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { TodoFooter } from '../todoFooter';

jest.mock('../components/TodoFilter', () => ({ default: 'TodoFilter' }));
const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};

describe('TodoFooter', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TodoFooter t={tMock} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

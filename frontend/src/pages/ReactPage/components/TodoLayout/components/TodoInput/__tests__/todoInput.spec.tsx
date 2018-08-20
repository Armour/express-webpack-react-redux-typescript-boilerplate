import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { TodoInput } from '../todoInput';

const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};
const dispatchMock = () => { return; };

describe('TodoInput', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TodoInput onSubmit={dispatchMock} t={tMock} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

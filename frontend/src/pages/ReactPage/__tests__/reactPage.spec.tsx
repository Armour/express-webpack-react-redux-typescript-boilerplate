import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { ReactPage } from '../reactPage';

jest.mock('../components/FetchNote', () => ({ default: 'FetchNote' }));
jest.mock('../components/TodoLayout', () => ({ default: 'TodoLayout' }));
const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};

describe('ReactPage', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <ReactPage t={tMock} i18n={i18nMock} />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

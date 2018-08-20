import 'materialize-css';
import * as React from 'react';
import { MemoryRouter } from 'react-router';
import * as TestRenderer from 'react-test-renderer';

import { Header } from '../header';

jest.mock('components/Dropdown', () => ({ default: 'Dropdown' }));
const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};

describe('Header', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <MemoryRouter>
        <div>
          <Header pathname='/parallax' t={tMock} i18n={i18nMock} />,
        </div>
      </MemoryRouter>,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

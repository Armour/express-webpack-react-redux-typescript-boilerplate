import 'materialize-css';
import * as React from 'react';
import { MemoryRouter } from 'react-router';
import * as TestRenderer from 'react-test-renderer';

import { Dropdown } from '../dropdown';

const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};

describe('Dropdown', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <MemoryRouter>
        <div>
          <Dropdown id='id' dropdownLists={['dropdown']} t={tMock} i18n={i18nMock} />,
        </div>
      </MemoryRouter>,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

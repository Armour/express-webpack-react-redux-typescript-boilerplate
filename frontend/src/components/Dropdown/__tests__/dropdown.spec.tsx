import 'materialize-css';
import React from 'react';
import { MemoryRouter } from 'react-router';
import TestRenderer from 'react-test-renderer';

import { i18nMock, tMock } from 'utils/mocks';
import { Dropdown } from '../dropdown';

describe('Dropdown', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <MemoryRouter>
        <div>
          <Dropdown id='id' dropdownLists={['dropdown']} t={tMock} tReady={true} i18n={i18nMock} />,
        </div>
      </MemoryRouter>,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

import 'materialize-css';
import React from 'react';
import { MemoryRouter } from 'react-router';
import TestRenderer from 'react-test-renderer';

import { Dropdown } from '../dropdown';

describe('Dropdown', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <MemoryRouter>
        <div>
          <Dropdown id='id' dropdownLists={['dropdown']} />,
        </div>
      </MemoryRouter>,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

import 'materialize-css';
import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';

import { Dropdown } from '../dropdown';

describe('Dropdown', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <BrowserRouter>
        <Fragment>
          <Dropdown id='id' dropdownLists={['dropdown']} />,
        </Fragment>
      </BrowserRouter>,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

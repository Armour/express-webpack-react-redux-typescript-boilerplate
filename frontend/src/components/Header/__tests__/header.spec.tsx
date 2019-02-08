import 'materialize-css';
import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';

import { Header } from '../header';

jest.mock('components/Dropdown', () => 'Dropdown');

describe('Header', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <BrowserRouter>
        <Fragment>
          <Header pathname='/parallax' />,
        </Fragment>
      </BrowserRouter>,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

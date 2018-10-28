import 'materialize-css';
import React from 'react';
import { MemoryRouter } from 'react-router';
import TestRenderer from 'react-test-renderer';

import { i18nMock, tMock } from 'utils/mocks';
import { Header } from '../header';

jest.mock('components/Dropdown', () => 'Dropdown');

describe('Header', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <MemoryRouter>
        <div>
          <Header pathname='/parallax' t={tMock} tReady={true} i18n={i18nMock} />,
        </div>
      </MemoryRouter>,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

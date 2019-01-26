import React from 'react';
import TestRenderer from 'react-test-renderer';

import { ReactPage } from '../reactPage';

jest.mock('../components/FetchNote', () => 'FetchNote');
jest.mock('../components/TodoLayout', () => 'TodoLayout');

describe('ReactPage', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <ReactPage />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

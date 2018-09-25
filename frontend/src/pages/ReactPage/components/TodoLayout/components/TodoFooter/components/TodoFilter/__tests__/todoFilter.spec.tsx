import React from 'react';
import TestRenderer from 'react-test-renderer';

import { dispatchMock } from 'utils/mocks';
import { TodoFilter } from '../todoFilter';

describe('TodoFilter', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TodoFilter active={true} setVisibilityFilter={dispatchMock}>
        {'test'}
      </TodoFilter>,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { TodoFilter } from '../todoFilter';

const dispatchMock = () => { return; };

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

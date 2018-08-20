import * as React from 'react';
import * as ShallowRenderer from 'react-test-renderer/shallow';

import ContentLoader from '../contentLoader';

describe('ContentLoader', () => {
  it('should renders correctly', () => {
    const renderer = ShallowRenderer.createRenderer();
    const result = renderer.render(
      <ContentLoader />,
    );
    expect(result).toMatchSnapshot();
    renderer.unmount();
  });
});

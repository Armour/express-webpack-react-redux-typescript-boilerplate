import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import ContentLoader from '../contentLoader';

describe('ContentLoader', () => {
  it('should renders correctly', () => {
    const renderer = ShallowRenderer.createRenderer();
    const props = {
      isLoading: false,
      pastDelay: false,
      timedOut: false,
      error: null,
      retry: () => { return; },
    };
    const result = renderer.render(
      <ContentLoader {...props} />,
    );
    expect(result).toMatchSnapshot();
    renderer.unmount();
  });
});

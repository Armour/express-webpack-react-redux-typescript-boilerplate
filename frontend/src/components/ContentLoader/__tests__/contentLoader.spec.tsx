import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { BodyContentLoader, FooterContentLoader, HeaderContentLoader } from '../contentLoader';

describe('HeaderContentLoader', () => {
  it('should renders correctly', () => {
    const renderer = ShallowRenderer.createRenderer();
    const result = renderer.render(
      <HeaderContentLoader />,
    );
    expect(result).toMatchSnapshot();
    renderer.unmount();
  });
});

describe('BodyContentLoader', () => {
  it('should renders correctly', () => {
    const renderer = ShallowRenderer.createRenderer();
    const result = renderer.render(
      <BodyContentLoader />,
    );
    expect(result).toMatchSnapshot();
    renderer.unmount();
  });
});

describe('FooterContentLoader', () => {
  it('should renders correctly', () => {
    const renderer = ShallowRenderer.createRenderer();
    const result = renderer.render(
      <FooterContentLoader />,
    );
    expect(result).toMatchSnapshot();
    renderer.unmount();
  });
});

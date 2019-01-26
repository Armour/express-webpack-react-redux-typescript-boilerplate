import 'materialize-css';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import { TranslationButton } from '../translationButton';

describe('TranslationButton', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <TranslationButton />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

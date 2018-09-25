import React from 'react';
import renderer from 'react-test-renderer';

import { PARALLAX_CODE } from '../constants/prismCodes';
import PrismCodes from '../prismCodes';

jest.mock('prismjs', () => ({
  highlightAll: () => { return; },
}));

test('PrismCodes component', () => {
  const component = renderer.create(
    <PrismCodes language='language-tsx'>
      {PARALLAX_CODE}
    </PrismCodes>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  component.unmount();
});

import { List } from 'immutable';
import 'materialize-css';
import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import { FetchNote } from '../fetchNote';

const tMock = (k: string) => k;
const i18nMock: any = {
  addResourceBundle: () => { return; },
};
const dispatchMock = () => { return; };

describe('FetchNote', () => {
  it('should renders correctly', () => {
    const renderer = TestRenderer.create(
      <FetchNote
        notes={List<any>()}
        loading={false}
        error={''}
        fetchAllNotes={dispatchMock}
        fetchNote={dispatchMock}
        addNote={dispatchMock}
        editNote={dispatchMock}
        removeNote={dispatchMock}
        t={tMock}
        i18n={i18nMock}
      />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

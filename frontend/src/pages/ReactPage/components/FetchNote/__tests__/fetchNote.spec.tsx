import { List } from 'immutable';
import 'materialize-css';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import { dispatchMock, i18nMock, tMock } from 'utils/mocks';
import { FetchNote } from '../fetchNote';

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
        tReady={true}
        i18n={i18nMock}
      />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

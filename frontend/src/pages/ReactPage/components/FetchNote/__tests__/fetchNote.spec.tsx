import { List } from 'immutable';
import 'materialize-css';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import { FetchNote } from '../fetchNote';

// Mock dispatch
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
      />,
    );
    expect(renderer).toMatchSnapshot();
    renderer.unmount();
  });
});

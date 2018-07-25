import { all } from 'redux-saga/effects';

import notes from './notes';

export default function* sagas() {
  yield all([
    notes(),
  ]);
}

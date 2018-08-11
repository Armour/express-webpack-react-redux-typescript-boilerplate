import { all } from 'redux-saga/effects';

import notes from 'services/notes/sagas';

export default function* sagas() {
  yield all([
    notes(),
  ]);
}

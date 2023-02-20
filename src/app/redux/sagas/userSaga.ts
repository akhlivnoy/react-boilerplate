import { takeLatest } from 'redux-saga/effects';

import { Paths } from '#navigation/routes';
import { userSlice } from '#redux/slices';
import { Navigator } from '#services/navigator';

function* loginUserWorker() {
  yield Navigator.navigate(Paths.Posts);
}

export function* userSaga() {
  yield takeLatest(userSlice.actions.login, loginUserWorker);
}

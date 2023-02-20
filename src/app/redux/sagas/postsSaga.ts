import { call, put, takeLatest } from 'redux-saga/effects';

import { IPost } from '#models';
import { postsSlice } from '#redux/slices';
import { GetPostsAction } from '#redux/types';
import { apiInstance } from '#services/api';
import { ApiGetPostsSuccessResponse } from '#services/api/types';

function* getPostsWorker({ payload: { limit } }: GetPostsAction) {
  const response: ApiGetPostsSuccessResponse = yield call(apiInstance.posts.getPosts, limit);

  yield put(postsSlice.actions.getPostsSuccess(response.posts));
}

export function* postsSaga() {
  yield takeLatest(postsSlice.actions.getPosts, getPostsWorker);
}

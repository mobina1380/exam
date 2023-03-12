import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'
import { ADD_ASYNC_AMOUNT } from "./actions";
import {fetchPosts} from "./api";
import {addPosts} from "./slice";
import {numberofPost} from "./actions";


// type postType = ReturnType<typeof fetchPosts>;
function* getAsyncPost(action) {
      const {payload} = action;
    const posts = yield call(fetchPosts, payload);
   
    yield put(addPosts(posts));
}
function* mySaga() {
  yield takeEvery(ADD_ASYNC_AMOUNT , getAsyncPost);
}

export default mySaga;

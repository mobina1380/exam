import {fork} from 'redux-saga/effects'
import postSaga from '../features/posts/saga'
export default function* rootSaga() {

    yield fork(postSaga)
  }
  
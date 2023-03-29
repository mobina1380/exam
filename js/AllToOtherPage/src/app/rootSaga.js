import { fork } from "redux-saga/effects";
import searchSaga from "../features/search/saga";
export default function* rootSaga() {
  yield fork(searchSaga);
}

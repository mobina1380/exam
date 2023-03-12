import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import Api from '...'
import { ADD_ASYNC_AMOUNT } from "./actions";

import { Effect, SagaReturnType } from "redux-saga/effects";
import { numberofPost } from "./actions";
import { GET_RESULTS } from "./actions";
import { setErrorMessage, setLoading, addSearchResults } from "./slice";
import { defaultPage, increamentPage } from "../page/pageSlice";
import { getResultsFromServer } from "../../api/api";
import { ISParam } from "./actions";

function* handleGetResults(action) {
  try {
    console.log("dkddkkd");
    yield put(setLoading());
    //       console.log('action hast');

    // @ts-ignore
    //  console.log(action.payload);

    const response = yield call(getResultsFromServer, action.payload);
    if (typeof response === "undefined") {
      yield put(setErrorMessage("نتیجه ای  یافت نشده است "));
    } else {
      yield put(addSearchResults(response));
      yield put(setErrorMessage(""));
      yield put(defaultPage());
    }
  } catch (e) {
    console.log("error");

    yield put(setErrorMessage("متأسفانه نتیجه‌ای یافت نشد"));
  }
  yield put(setLoading());
}

function* searchSaga() {
  yield takeEvery(GET_RESULTS, handleGetResults);
}

export default searchSaga;

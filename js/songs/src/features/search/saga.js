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
    yield put(setLoading());

    const response = yield call(getResultsFromServer, action.payload);
    if (typeof response === "undefined") {
      yield put(setErrorMessage("  ): نتیجه ای  یافت نشده است "));
    } else {
      // this is code for api song
      let arrayme = [];
      arrayme.push({ type: action.payload.type });
      arrayme.push({ response: response });

      yield put(addSearchResults(arrayme));

      //yield put(addSearchResults(response))
      yield put(setErrorMessage(""));
      yield put(defaultPage());
    }
  } catch (e) {
    console.log("error");
    //@ts-ignore
    console.log(e.message);

    // @ts-ignore
    yield put(setErrorMessage(" ): متأسفانه نتیجه‌ای یافت نشد"));
  }
  yield put(setLoading());
}

function* searchSaga() {
  yield takeEvery(GET_RESULTS, handleGetResults);
}

export default searchSaga;

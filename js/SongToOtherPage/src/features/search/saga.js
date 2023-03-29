import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import Api from '...'
import { ADD_ASYNC_AMOUNT } from "./actions";
import { fetchPosts } from "./api";
import { addPosts } from "./slice";
import { Effect, SagaReturnType } from "redux-saga/effects";
import { numberofPost } from "./actions";
import { GET_RESULTS } from "./actions";
import { setErrorMessage, setLoading, addSearchResults } from "./slice";
import { defaultPage, increamentPage } from "../page/pageSlice";
import { getResultsFromServer } from "../../api/api";
import { ISParam } from "./actions";

// type postType = ReturnType<typeof fetchPosts>;
function* getAsyncPost(action) {
  const { payload } = action;
  const posts = yield call(fetchPosts, payload);
  // console.log(posts.status);
  yield put(addPosts(posts));
}

function* handleGetResults(action) {
  try {
    console.log("dkddkkd");
    yield put(setLoading());

    const response = yield call(getResultsFromServer, action.payload);
    if (typeof response === "undefined") {
      yield put(setErrorMessage("نتیجه ای  یافت نشده است "));
    } else {
      // this is code for api song

      let arrayme = [];
      arrayme.push({ type: action.payload.type });
      arrayme.push({ response: response });

      yield put(addSearchResults(arrayme));

      //yield put(addSearchResults(response))
      yield put(setErrorMessage(""));
      //yield put(defaultPage())
    }
  } catch (e) {
    console.log("error");

    console.log(e.message);

    yield put(setErrorMessage("متأسفانه نتیجه‌ای یافت نشد"));
  }
  yield put(setLoading());
}

function* mySaga() {
  yield takeEvery(ADD_ASYNC_AMOUNT, getAsyncPost);
}

function* searchSaga() {
  yield takeEvery(GET_RESULTS, handleGetResults);
}

export default searchSaga;

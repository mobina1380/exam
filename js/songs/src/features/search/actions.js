import { createAction } from "@reduxjs/toolkit";
export const ADD_ASYNC_AMOUNT = "posts/addAsync";
export const addAsyncWithSaga = createAction(ADD_ASYNC_AMOUNT);
export const numberofPost = 2;
export const GET_RESULTS = "getResults";
// export type ISParam = {
//     query: string,
//     page: number,

// }

export const getResults = createAction(GET_RESULTS);

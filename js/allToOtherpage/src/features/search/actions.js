import { createAction } from "@reduxjs/toolkit";

export const GET_RESULTS = "getResults";
// export type ISParam = {
//     query: string,
//     page: number,

// }

export const getResults = createAction(GET_RESULTS);

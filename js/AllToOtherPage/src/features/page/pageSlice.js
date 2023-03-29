import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: Number(2),
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    defaultPage: (state) => {
      state.page = 1;
    },
    increamentPage: (state) => {
      state.page += 1;
      console.log("pppppp :" + state.page);
    },
  },
});

export const { defaultPage, increamentPage } = pageSlice.actions;
export const selectPage = (state) => state.page.page;

export default pageSlice.reducer;

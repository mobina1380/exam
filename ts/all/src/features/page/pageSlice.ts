import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page:Number(1) ,
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
    },
  },
});

export const { defaultPage, increamentPage } = pageSlice.actions;
export const selectPage = (state:any) => state.page.page;

export default pageSlice.reducer;

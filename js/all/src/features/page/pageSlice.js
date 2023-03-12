import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page:Number(1) ,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
 
    defaultPage: (state) => {
      // console.log('default'+state.page);
      state.page = 1;
    },
    increamentPage: (state) => {
     console.log('sss');
      state.page += 1;
      console.log('pppppp :' +state.page);

      // console.log('increment       :'+state.page);
    },  
    
  },
  
});


export const { defaultPage, increamentPage } = pageSlice.actions;
export const selectPage = (state) => state.page.page;

export default pageSlice.reducer;

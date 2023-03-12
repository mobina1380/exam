// import { createSlice } from '@reduxjs/toolkit';
// import { RootState } from '../../app/store';

// // const initialState = {
// //   postList: []
// // };
// export interface PostState {
//   [x: string]: any;
//   postList: Array<{id: number, name: string}>;
//   id: number
// }

// const initialState: PostState = {
//   postList: [],
//   id :1,
//     searchResults:[],
//     isLoading:false,
//     errorMessage:"",
//     searchTerm:null
  
// };

// export const slice = createSlice({
//   name: 'result',
//   initialState,
//   reducers: {
//    addPosts: (state, action) => {
//       state.postList = action.payload;
//     },
//     addSearchResults: (state, action) => {
//       state.searchResults = state.searchResults.concat(action.payload);
//         // console.log(state);
//         // console.log(action);
//     },  
//     setLoading:(state) => {
//         state.isLoading = !state.isLoading;
//     },
//     setErrorMessage:(state,action) => {
//         state.errorMessage = action.payload;
//     },
//     setDefaultResults:(state) => {
//         state.searchResults = [];
//     },
//     addSearchTerm:(state , action) => {
//         state.searchTerm = action.payload;
//     }

//   },
// });

// export const { addPosts ,addSearchResults,
//   setErrorMessage,
//   setLoading,
//   addSearchTerm,
//   setDefaultResults} = slice.actions;
//   export const selectSearchResults = (state:any) => state.result.searchResults;
// export const selectSearchTerm = (state:any) => state.result.searchTerm;
// export const selectErrorMessage = (state:any) => state.result.errorMessage;
// export default slice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";



const initialState = {
  postList: [],
  id: 1,
  searchResults: [],
  isLoading: false,
  errorMessage: "",
  searchTerm: null,
};

export const slice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.postList = action.payload;
    },
    addSearchResults: (state, action) => {
    

     state.searchResults = state.searchResults.concat(action.payload);
     
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setDefaultResults: (state) => {
      state.searchResults = [];
    },
    addSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addPosts,
  addSearchResults,
  setErrorMessage,
  setLoading,
  addSearchTerm,
  setDefaultResults,
} = slice.actions;
export const selectSearchResults = (state:any) => state.result.searchResults;
export const selectSearchTerm = (state:any) => state.result.searchTerm;
export const selectErrorMessage = (state:any) => state.result.errorMessage;
export const selectIsLoading = (state:any) => state.result.isLoading;
export default slice.reducer;

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
      //  this code for songs
      if (
        action.payload[0]["type"] == "SONG" ||
        action.payload[0]["type"] == "AUDIO_BOOK" ||
        action.payload[0]["type"] == "PODCAST"
      ) {
        state.searchResults = action.payload[1]["response"];
      } else {
        state.searchResults = state.searchResults.concat(
          action.payload[1]["response"]
        );
      }

      //state.searchResults = state.searchResults.concat(action.payload);
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
export const selectSearchResults = (state) => state.result.searchResults;
export const selectSearchTerm = (state) => state.result.searchTerm;
export const selectErrorMessage = (state) => state.result.errorMessage;
export const selectIsLoading = (state) => state.result.isLoading;
export default slice.reducer;

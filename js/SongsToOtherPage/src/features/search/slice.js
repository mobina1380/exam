import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  postList: [],
  id: 1,
  searchResults: [],
  isLoading: false,
  errorMessage: "",
  searchTerm: null,
  cSong: 0,
  cPodcast: 0,
  cAUDIO_BOOK: 0,
  c: 0,
};

export const slice = createSlice({
  name: "result",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.postList = action.payload;
    },
    addSearchResults: (state, action) => {
      if (action.payload[0]["type"] == "SONG" && state.cSong == 0) {
        state.searchResults = action.payload[1]["response"];
        state.cSong += 1;
        state.cPodcast = 0;
        state.cAUDIO_BOOK = 0;
      } else if (
        action.payload[0]["type"] == "AUDIO_BOOK" &&
        state.cAUDIO_BOOK == 0
      ) {
        state.searchResults = action.payload[1]["response"];
        state.cAUDIO_BOOK += 1;
        state.cSong = 0;
        state.cPodcast = 0;
      } else if (
        action.payload[0]["type"] == "PODCAST" &&
        state.cPodcast == 0
      ) {
        state.searchResults = action.payload[1]["response"];
        state.cPodcast += 1;
        state.cSong = 0;
        state.cAUDIO_BOOK = 0;
      } else if (action.payload[0]["type"] == "ALL" && state.c == 0) {
        state.searchResults = state.searchResults.concat(
          action.payload[1]["response"]
        );
        state.c += 1;
        state.cPodcast = 0;
        state.cSong = 0;
        state.cAUDIO_BOOK = 0;
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

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

// const initialState = {
//   postList: []
// };
// export interface PostState {
//   postList: Array<{id: number, name: string}>;
//   id: number
// }

const initialState = {
  postList: [],
  id :1,
};

export const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
   addPosts: (state, action) => {
      state.postList = action.payload;
    },
  },
});

export const { addPosts } = slice.actions;
export const selectPosts = (state) => state.posts.postList;
export default slice.reducer;

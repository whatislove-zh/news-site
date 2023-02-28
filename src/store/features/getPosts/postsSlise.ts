import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import axios, { AxiosStatic } from "axios";
import * as api from "../../apiConfig";

import { RootState } from "../..";
//import apiType from "../../apiConfig";

export  type PostType = {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: [
    {
      id: string;
      provider: string;
    },
    {
      id: string;
      provider: string;
    }
  ];
  events: Array<string>;
};

// type extraType = {
//     client: AxiosStatic,
//     api: apiType
// }

// export const loadPosts = createAsyncThunk<Post[], undefined, {extra:extraType} >(
//   "@@posts/load-posts",
//   async (_, thunkApi) => {
//     const {client, api} = thunkApi.extra
//     const response = await client.get(api.ALL_POSTS)

//     return response.data
//   }
// );

export const loadPosts = createAsyncThunk<
  PostType[],
  undefined,
  { rejectValue: string }
>("todos/fetchTodos", async function (_, { rejectWithValue }) {
  const response = await fetch(api.ALL_POSTS);

  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return data;
});

type initialType = {
  status: "idle" | "rejected" | "loading" | "received";
  error: null | string | {};
  list: PostType[];
};

const initialState: initialType = {
  status: "idle",
  error: null,
  list: [],
};

const postsSlice = createSlice({
  name: "@posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.error;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.status = "received";
        state.error = null;
        state.list = action.payload;
      });
  },
});

export const postsReduser = postsSlice.reducer;

export const selectPostsInfo = (state: RootState) => ({
  status: state.posts.status,
  error: state.posts.error,
  qty: state.posts.list.length,
});

export const selectPosts = (state: RootState) => state.posts.list;

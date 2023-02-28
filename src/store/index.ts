import { configureStore } from "@reduxjs/toolkit";
import { deleteItemsReducer } from "./features/deletePost/deleteSlice";
import { postsReduser } from "./features/getPosts/postsSlise";

const store = configureStore({
  reducer: { posts: postsReduser, deletedItems: deleteItemsReducer },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

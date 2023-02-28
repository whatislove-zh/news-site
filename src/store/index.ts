import { configureStore } from "@reduxjs/toolkit";
import { postsReduser } from "./features/getPosts/postsSlise";

const store = configureStore({
  reducer: { posts: postsReduser },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

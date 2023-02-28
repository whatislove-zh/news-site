import { configureStore } from "@reduxjs/toolkit";
import axios from "axios"
import * as api from "./apiConfig"
import { postsReduser } from "./features/getPosts/postsSlise";


const store = configureStore({
    reducer: {posts: postsReduser},
    devTools: true,
    middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    })
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
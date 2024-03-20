// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import selectedOptionsReducer from "./selectedOptionsSlice";

export const store = configureStore({
  reducer: {
    selectedOptions: selectedOptionsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

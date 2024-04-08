// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import selectedOptionsReducer from "./selectedOptionsSlice";
import associatedFeeReducer from "./associatedFeeSlice";
import installmentReducer from "./installmentSlice";

export const store = configureStore({
  reducer: {
    selectedOptions: selectedOptionsReducer,
    associatedFee: associatedFeeReducer,
    payment: installmentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

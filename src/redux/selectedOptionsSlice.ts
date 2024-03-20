// src/features/selectedOptionsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedOptionsState {
  [key: string]: string | null;
}

const initialState: SelectedOptionsState = {};

const selectedOptionsSlice = createSlice({
  name: "selectedOptions",
  initialState,
  reducers: {
    selectOption(
      state,
      action: PayloadAction<{ title: string; option: string }>
    ) {
      const { title, option } = action.payload;
      state[title] = option;
    },
  },
});

export const { selectOption } = selectedOptionsSlice.actions;

export default selectedOptionsSlice.reducer;

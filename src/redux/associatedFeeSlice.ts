// import necessary dependencies
import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  title: "Other associated fee",
  associatedFee: [{ id: "1", name: "Graduation fee", amount: "₦120,000.00" }],
};

// Create a Redux Toolkit slice
const associatedFeeSlice = createSlice({
  name: "associatedFee",
  initialState,
  reducers: {
    // Reducer to add a new AssociatedFee value
    addAssociatedFee: (state, action) => {
      state.associatedFee.push(action.payload);
    },
    // Reducer to remove a AssociatedFee value by ID
    removeAssociatedFee: (state, action) => {
      state.associatedFee = state.associatedFee.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

// Export actions
export const { addAssociatedFee, removeAssociatedFee } =
  associatedFeeSlice.actions;

// Export reducer
export default associatedFeeSlice.reducer;

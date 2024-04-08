import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Breakdown {
  id: string; // Add id field
  name: string;
  amount: string;
  date: string;
}

export interface Installment {
  type: number;
  name: string;
  breakdown: Breakdown[];
}

export interface Payment {
  title: string;
  totalPrice: string;
  installments: Installment[];
}

// Define initial state
const initialState: Payment = {
  title: "Payment Structure",
  totalPrice: "₦100,000.00",
  installments: [
    {
      type: 1,
      name: "One-time payment",
      breakdown: [
        {
          id: "1", // Example id
          name: "First installment payment",
          amount: "₦100,000.00",
          date: "18-06-2024",
        },
      ],
    },
    {
      type: 2,
      name: "Customized Installment Payment",
      breakdown: [
        {
          id: "2", // Example id
          name: "First installment payment",
          amount: "₦50,000.00",
          date: "21-04-2024",
        },
        {
          id: "3", // Example id
          name: "Second installment payment",
          amount: "₦50,000.00",
          date: "14-06-2024",
        },
      ],
    },
  ],
};

// Create a Redux Toolkit slice
const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    // Reducer to add a new breakdown item to a specific installment
    addBreakdownItem: (
      state: Payment,
      action: PayloadAction<{
        type: number; // Use type field to identify installment
        breakdownItem: Breakdown;
      }>
    ) => {
      const { type, breakdownItem } = action.payload;
      const targetInstallment = state.installments.find(
        (inst) => inst.type === type
      );
      if (targetInstallment) {
        // Assign a unique id to the new breakdown item
        const id = (targetInstallment.breakdown.length + 1).toString(); // Example of auto-incrementing id
        const breakdownWithId = { ...breakdownItem, id };
        targetInstallment.breakdown.push(breakdownWithId);
      }
    },
    // Reducer to remove a breakdown item from a specific installment
    removeBreakdownItem: (
      state: Payment,
      action: PayloadAction<{
        type: number; // Use type field to identify installment
        breakdownId: string;
      }>
    ) => {
      const { type, breakdownId } = action.payload;
      const targetInstallment = state.installments.find(
        (inst) => inst.type === type
      );
      if (targetInstallment) {
        // Find index of breakdown item with provided id
        const index = targetInstallment.breakdown.findIndex(
          (breakdown) => breakdown.id === breakdownId
        );
        // Remove breakdown item if found
        if (index !== -1) {
          targetInstallment.breakdown.splice(index, 1);
        }
      }
    },
    // Reducer to edit a breakdown item of a specific installment
    editBreakdownItem: (
      state: Payment,
      action: PayloadAction<{
        type: number; // Use type field to identify installment
        breakdownId: string;
        updatedBreakdownItem: Breakdown;
      }>
    ) => {
      const { type, breakdownId, updatedBreakdownItem } = action.payload;
      const targetInstallment = state.installments.find(
        (inst) => inst.type === type
      );
      if (targetInstallment) {
        // Find breakdown item with provided id
        const breakdown = targetInstallment.breakdown.find(
          (breakdown) => breakdown.id === breakdownId
        );
        // Update breakdown item if found
        if (breakdown) {
          Object.assign(breakdown, updatedBreakdownItem);
        }
      }
    },
  },
});

export const paymentSelector = (state: { payment: Payment }) => state.payment;

// Export actions
export const { addBreakdownItem, removeBreakdownItem, editBreakdownItem } =
  paymentSlice.actions;

// Export reducer
export default paymentSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./action";

export interface User {
  id: string;
  email: string;
}

export interface CounterState {
  value: number;
  users: User[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  value: 0,
  users: [],
  isLoading: false,
  error: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch users"; 
      });
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./action";
import { IUser } from "../../interfaces/user";

interface IUserState {
  users: IUser[];
  isLoading: boolean;
  error: string | null;
  count: number;
}

const initialState: IUserState = {
  count: 0,
  users: [],
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state: IUserState, action: PayloadAction<IUser[]>) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = null;
      }
    ),
      builder.addCase(fetchUsers.pending, (state: IUserState) => {
        state.isLoading = true;
      }),
      builder.addCase(fetchUsers.rejected, (state: IUserState, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { increment, decrement } = userSlice.actions;

export default userSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    "users/fetchAll",
    async (_, thunkApi) =>{
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue("Users not found")
        }
    }
)
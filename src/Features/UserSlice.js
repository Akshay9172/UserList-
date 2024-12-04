// src/features/users/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async function to fetch the user list from an API using Promises (without async/await)
export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
    // Return a promise from the fetch call
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json()) // Parse the response into JSON
        .catch((error) => {
            throw new Error(error.message); // Handle error
        });
});

// Create the slice of state
const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle the async states
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default userSlice.reducer;

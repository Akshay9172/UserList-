
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../src/Features/UserSlice';

const store = configureStore({
    reducer: {
        users: userReducer

    }
});

export default store;

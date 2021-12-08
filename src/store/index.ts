import { configureStore } from '@reduxjs/toolkit';
import {slice} from "./filling/slice";

export const store = configureStore({
    reducer: {
        food: slice.reducer,
    }
})
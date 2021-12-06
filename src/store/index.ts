import { configureStore } from '@reduxjs/toolkit';
import {slice} from "./food/slice";

export const store = configureStore({
    reducer: {
        food: slice.reducer,
    }
})
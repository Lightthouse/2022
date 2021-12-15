import { configureStore } from '@reduxjs/toolkit';
import {slice} from "./entity/slice";

export const store = configureStore({
    reducer: {
        filling: slice.reducer,
    }
})

export type appState = ReturnType<typeof store.getState>;
export const allActions = {...slice.actions}


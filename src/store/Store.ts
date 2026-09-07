import { configureStore } from "@reduxjs/toolkit";
import { sessionSlice } from "./SessionSlice";

export const store = configureStore({
    reducer: {
        sessions: sessionSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

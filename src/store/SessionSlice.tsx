import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Session = {
    id: string;
    title: string;
    summary: string;
    description: string;
    date: string;
    image: string;
    duration: number;
};

type SessionState = {
    items: Session[];
}


const initialState: SessionState = {
    items: [],
}
export const sessionSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {
        addSession(
            state,
            action: PayloadAction<Session>) {
            if (state.items.find(item => item.id === action.payload.id)) {
                return
            }
            else {
                state.items.push({ ...action.payload })
            }
        },
        removeSession(
            state,
            action: PayloadAction<string>) {
            const removedItemIndex = state.items.findIndex(item => item.id === action.payload)
            if (removedItemIndex !== -1) {
                state.items.splice(removedItemIndex, 1);
            }
        }
    }
})

export const { addSession } = sessionSlice.actions;
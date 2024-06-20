import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isBookServiceBoxOpen: false,
    animateBox: false
}

export const bookServiceSlice = createSlice({
    name: 'bookService',
    initialState,
    reducers: {
        openBookServiceBox: (state) => {
            state.isBookServiceBoxOpen = true;
        },
        closeBookServiceBox: (state) => {
            state.isBookServiceBoxOpen = false;
            state.animateBox = false;
        },
        startAnimateBox: (state) => {
            state.animateBox = true;
        },
        stopAnimateBox: (state) => {
            state.animateBox = false;
        }
    }
});

export const { openBookServiceBox, closeBookServiceBox, startAnimateBox, stopAnimateBox } = bookServiceSlice.actions;
export default bookServiceSlice.reducer;
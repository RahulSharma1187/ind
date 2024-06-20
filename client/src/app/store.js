import {configureStore} from "@reduxjs/toolkit";
import bookServiceReducer from '../features/bookService/bookServiceSlice';

export const store = configureStore({
    reducer: {
        bookService: bookServiceReducer
    }
});
